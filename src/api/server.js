var express    = require('express');        
var app        = express();
var bodyParser = require('body-parser');
var path       = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static',express.static(path.join(__dirname,'../../dist')));

var router = express.Router();
var homeController = require('./controllers/home.controller');
var booksController = require('./controllers/books.controller');

router.get('/books', booksController.getBooks);
router.post('/books', booksController.createBook);
app.get('/', homeController.index);

app.use('/api', router);

module.exports = app;