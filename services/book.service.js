const db = require('../db');
const BookModel = require('../models/book.model');

class BookService {
  getBookId(id) {
    const { name, description } = db.get(id);
    return new BookModel(name, description, id);
  }
}

module.exports = new BookService();
