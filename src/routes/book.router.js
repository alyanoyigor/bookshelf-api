import express from 'express';
import * as bookController from '../controllers/book.controller';
import idRequiredMiddleware from '../middlewares/idRequired.middleware';

const router = express.Router();

router.get('/', bookController.getAllBooks.bind(bookController));
router.get(
  '/:id',
  idRequiredMiddleware,
  bookController.getBook.bind(bookController)
);
// router.post('/', bookController.createBook.bind(bookController));
// router.patch(
//   '/:id',
//   idRequiredMiddleware,
//   bookController.updateBook.bind(bookController)
// );

module.exports = router;
