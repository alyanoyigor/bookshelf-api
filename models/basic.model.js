const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class BasicModel {
  save() {
    const id = uuidv4();
    const { name, description } = this;
    const data = { id, name, description };
    db.set(id, data);
    return data;
  }
}

module.exports = BasicModel;
