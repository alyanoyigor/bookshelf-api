const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/books.json');
module.exports = db;
