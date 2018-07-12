import React from 'react';
import axios from 'axios';
import BooksComponent from '../components/BooksComponent';

class BooksContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            books : [],
            book : {
                name : null,
                isbn : null,
                author : null,
                year : null
            },
            error : null
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.createBook = this.createBook.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount(){
        this.getBooks();
    }

    onValueChange(e){        
        let { name, value } = e.target;
        let { book } = this.state;
        book[name] = value;
        this.setState({
            book: book
        });
    }

    getBooks(){
        axios.get('/api/books')
        .then((result)=> {
            let { data, success, error } = result.data;
            if(success){
                this.setState({
                    books : data
                });
            }else{
                this.setState({
                    error
                });
            }
        })
        .catch((error)=> {
            this.setState({
                error : error.message
            });
        });
    }

    createBook(){
        let { book } = this.state;
        if(book.name && book.author && book.isbn && book.year){
            axios.post('/api/books', book)
            .then((result)=> {                
                let { success, error } = result.data;
                if(success){
                    this.clear();
                    this.getBooks();
                }else{
                    this.setState({
                        error
                    });
                }                
            })
            .catch((error)=> {
                this.setState({
                    error : error.message
                });
            });
        }else{
            this.setState({
                error : 'Please fill all the fields.'
            });
        }
    }

    clear(){
        this.setState({
            error : null,
            book : {
                name : null,
                isbn : null,
                author : null,
                year : null
            }
        });
    }

    render() {
       return (
            <BooksComponent 
                onValueChange={this.onValueChange}
                createBook={this.createBook}
                clear={this.clear}
                {...this.state}
                {...this.props}
            />
        );
    }
 }
 export default BooksContainer;