import express from 'express';
import bookRouter from './book.router.js';

const router = express.Router();
router.use('/book', bookRouter);

export default router;
