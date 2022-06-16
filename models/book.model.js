const BasicModel = require('./basic.model');

class BookModel extends BasicModel {
  name;
  id;
  description;

  constructor(name, description, id = null) {
    super();
    this.name = name;
    this.description = description;
    this.id = id;
  }
}

module.exports = BookModel;
