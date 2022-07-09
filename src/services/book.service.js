import db from '../db';
import BookModel from '../models/book.model';

class BookService {
  getBookId(id) {
    const { name, description } = db.get(id);
    return new BookModel(name, description, id);
  }
  createBook(name, description) {
    const model = new BookModel(name, description);
    return model.save();
  }
}

export default BookService;
