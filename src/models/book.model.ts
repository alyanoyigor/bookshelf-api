import { Schema, model } from 'mongoose';
import { TBook } from '../types';

const bookSchema = new Schema<TBook>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date() },
    pages: { type: Number, required: true },
    excerpt: { type: String },
  },
  { timestamps: true }
);

export default model('Book', bookSchema);
