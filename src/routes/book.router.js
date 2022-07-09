import express from 'express';
import BookController from '../controllers/book.controller.js';

const bookRouter = express.Router();
const bookController = new BookController();

bookRouter.get('/', bookController.getAllBooks.bind(bookController));
bookRouter.get('/:id', bookController.getBook.bind(bookController));
bookRouter.post('/', bookController.createBook.bind(bookController));
// bookRouter.patch( '/:id', bookController.updateBook.bind(bookController));

export default bookRouter;
