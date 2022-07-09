import express from 'express';
import bookRouter from './book.router';

const router = express.Router();
router.use('/book', bookRouter);

export default router;
