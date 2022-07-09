import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: new Date() },
    pages: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model('Book', bookSchema);
