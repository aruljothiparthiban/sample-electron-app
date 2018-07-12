var path = require('path');

const books = [
    {
        name   : 'Mastering Electron',
        isbn   : '100090',
        author : 'John Doe',
        year   : 2015
    }
];

module.exports.getBooks = function(req,res){
    res.send({
        success : true,
        data : books
    });
};

module.exports.createBook = function(req,res){
    let book = req.body;
    if(book.name && book.isbn && book.author && book.year){
        books.push(book);
        res.send({
            success : true,
            data : book
        });
    }else{
        res.send({
            success : false,
            error : 'Please fill all the fields.'
        });
    }
};