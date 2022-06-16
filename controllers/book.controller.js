const {
  formatSuccessResponse,
  formatErrorResponse,
} = require('../services/http.service');
const yup = require('yup');
const BookModel = require('../models/book.model');
const bookService = require('../services/book.service');

const bookSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

module.exports.getAllBooks = (req, res) => {
  const books = req.db.JSON();
  return formatSuccessResponse(res, { books });
};

module.exports.getBook = (req, res) => {
  const id = req.params;
  if (!id) {
    return formatErrorResponse(res, 'Id is required');
  }
  const book = bookService.getBook(id);
  return formatSuccessResponse(res, book);
};

module.exports.updateBook = (req, res) => {
  const id = req.params;
  if (!id) {
    return formatErrorResponse(res, 'Id is required');
  }
};

module.exports.createBook = async (req, res) => {
  try {
    await bookSchema.validate(req.body);
    const { name, description } = req.body;
    const model = new BookModel(name, description);
    const data = model.save();
    return formatSuccessResponse(res, data);
  } catch (error) {
    console.log(error);
    return formatErrorResponse(error);
  }
};
