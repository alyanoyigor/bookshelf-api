import {
  formatSuccessResponse,
  formatErrorResponse,
} from '../services/http.service';
import * as yup from 'yup';
import BookService from '../services/book.service';
import BookModel from '../models/book.model';

class BookController {
  bookSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
  });

  constructor(bookService = new BookService()) {
    this.bookService = bookService;
  }

  getAllBooks(req, res) {
    const books = req.db.JSON();
    return formatSuccessResponse(res, { books });
  }

  async getBook(req, res) {
    const book = await BookModel.findOne({ _id: req.params.id });
    // const id = req.params;
    // const book = this.bookService.getBookId(req.params.id);
    return formatSuccessResponse(res, book);
  }

  async createBook(req, res) {
    try {
      await bookSchema.validate(req.body);
      const { name, description } = req.body;
      const data = this.bookService.createBook(name, description);
      return formatSuccessResponse(res, data);
    } catch (error) {
      console.log(error);
      return formatErrorResponse(error);
    }
  }
}

export default BookController;
