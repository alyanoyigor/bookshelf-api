const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const db = require('./db');
const app = express();

const port = 4400;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/api/v1', router);

app.use('*', (_req, res) => {
  return res.status(404).json({
    message: 'Not found',
  });
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
