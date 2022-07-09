import {
  formatSuccessResponse,
  formatErrorResponse,
} from '../services/http.service.js';
import * as yup from 'yup';
import BookModel from '../models/book.model.js';

class BookController {
  bookSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  async getAllBooks(req, res) {
    const books = await BookModel.find({});
    return formatSuccessResponse(res, { books });
  }

  async getBook(req, res) {
    try {
      const book = await BookModel.findOne({ _id: req.params.id });
      return formatSuccessResponse(res, book);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async createBook(req, res) {
    try {
      const data = req.body;
      // this.bookSchema.validate(data); // app crashing after yup validation
      const book = new BookModel(data);
      await book.save();
      return formatSuccessResponse(res, book);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }
}

export default BookController;
