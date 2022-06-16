const express = require('express');
const bookRouter = require('./book.router');

const router = express.Router();
router.use('/book', bookRouter);

module.exports = router;
