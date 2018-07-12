import React from 'react';

class BooksComponent extends React.Component {
    
    render() {
       let { error, book, books, onValueChange, createBook, clear } = this.props; 
       return (
          <div className="row">
            <div className="col-lg-12">
                <h3 className="mt-2">Create Book</h3>
                <br/>
                <form>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <div className="form-group row">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-6">
                            <input value={book.name||''} onChange={onValueChange} type="text" className="form-control" id="name" name="name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="isbn" className="col-sm-2 col-form-label">Isbn</label>
                        <div className="col-sm-6">
                            <input value={book.isbn||''} onChange={onValueChange} type="text" className="form-control" id="isbn" name="isbn" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="author" className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-6">
                            <input value={book.author||''} onChange={onValueChange} type="text" className="form-control" id="author" name="author" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="year" className="col-sm-2 col-form-label">Year</label>
                        <div className="col-sm-6">
                            <input value={book.year||''} onChange={onValueChange} type="text" className="form-control" id="year" name="year" />
                        </div>
                    </div>
                    <div className="form-group row">                        
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={createBook} type="button" className="btn btn-primary mr-2">Create</button>
                            <button onClick={clear} type="button" className="btn btn-default">Clear</button>
                        </div>
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Isbn</th>
                                <th>Author</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{book.name}</td>
                                        <td>{book.isbn}</td>
                                        <td>{book.author}</td>
                                        <td>{book.year}</td>
                                    </tr>
                                );
                            })}
                            {books.length===0 && (
                                <tr>
                                    <td colSpan="5" className="text-center">No books found.</td>
                                </tr>
                            )}                        
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
       );
    }
 }
 export default BooksComponent;