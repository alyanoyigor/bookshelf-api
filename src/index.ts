import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';

const { PORT, MONGO_URI } = process.env;

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/', router);

app.use('*', (_req, res) => {
  return res.status(404).json({
    message: 'Not found',
  });
});

const main = async () => {
  try {
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI);
      console.log('Connected to Mongo');
    }

    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
