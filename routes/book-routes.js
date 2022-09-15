const express = require('express');
const router = express.Router();
const bookscontroller = require('../controllers/books-controllers');
// const Book = require('../model/Book');

router.get('/',bookscontroller.getAllBooks);
router.post('/',bookscontroller.addBook);
router.get('/:id',bookscontroller.getById);
router.put('/:id',bookscontroller.updateBook);
router.delete('/:id',bookscontroller.deleteBook);


module.exports = router;
