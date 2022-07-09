import express from 'express';
import BookController from '../controllers/book.controller';
import paginationMiddleware from '../middlewares/pagination.middleware';

const bookRouter = express.Router();
const bookController = new BookController();

bookRouter.get(
  '/',
  paginationMiddleware,
  bookController.getAllBooks.bind(bookController)
);
bookRouter.get('/:id', bookController.getBook.bind(bookController));
bookRouter.post('/', bookController.createBook.bind(bookController));
bookRouter.patch('/:id', bookController.updateBook.bind(bookController));
bookRouter.delete('/:id', bookController.deleteBook.bind(bookController));

export default bookRouter;
