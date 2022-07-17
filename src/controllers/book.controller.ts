import * as yup from 'yup';
import { Request, Response } from 'express';
import {
  formatSuccessResponse,
  formatErrorResponse,
} from '../services/http.service';
import BookModel from '../models/book.model';
import { TBook } from '../types';

class BookController {
  bookSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  findBook(res: Response, book: TBook | null) {
    if (!book) {
      throw new Error("Can't find item by determine id");
    }
    return formatSuccessResponse(res, book);
  }

  async getAllBooks(req: Request, res: Response) {
    try {
      const books = await BookModel.find().skip(req.page).limit(req.limit);
      return formatSuccessResponse(res, books);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async getBook(req: Request, res: Response) {
    try {
      const book = await BookModel.findOne({ _id: req.params.id });
      this.findBook(res, book);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async createBook(req: Request, res: Response) {
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

  async updateBook(req: Request, res: Response) {
    try {
      const book = await BookModel.findById(req.params.id);
      const model = new BookModel(book);
      const updatedBook = model.set(req.body);
      model.save();
      this.findBook(res, updatedBook);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }

  async deleteBook(req: Request, res: Response) {
    try {
      const book = await BookModel.findByIdAndDelete(req.params.id);
      this.findBook(res, book);
    } catch (error) {
      return formatErrorResponse(res, error);
    }
  }
}

export default BookController;
