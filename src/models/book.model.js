import { model, Schema } from 'mongoose';

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date() },
    pages: { type: Number },
  },
  { timestamps: true }
);

export default model('Book', bookSchema);
