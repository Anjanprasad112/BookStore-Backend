const Book = require('../model/Book');

const getAllBooks = async (req, res, next) => {
    let books;
  try{
    books = await Book.find();
  }
    catch(err){
      console.log(err);
    }
    if(!books){
      return res.status(404).json({message: "No books found"});
    }
    res.status(200).json({books});

}
const getById=async (req, res, next) => {
    const bookId = req.params.id;
    let book;
    try {
        book = await Book.findById(bookId);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
}

const addBook = async (req, res, next) => {
    const { name, author, price, description, available,image } = req.body;
    const newBook = new Book({
        name,
        author,
        price,
        description,
        available,
        image
    });
    try {
        await newBook.save();
    } catch (err) {
        console.log(err);
    }
    res.status(201).json({ newBook });
}
const updateBook = async (req, res, next) => {
    const bookId = req.params.id;
    const { name, author, price, description, available,image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(bookId,{
            name,
            author,
            price,
            description,
            available,
            image
        });
        book = await book.save();
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book });
}
const deleteBook = async (req, res, next) => {
    const bookId = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(bookId);
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted" });
}
    
exports.addBook = addBook;
exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;