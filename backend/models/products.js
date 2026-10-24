// Khodiyar Grocery API - Product model
const db = require('../db');

const COLLECTION = 'products';
const REQUIRED = ['name','price','categoryId','stock'];

function validate(data) {
  const missing = REQUIRED.filter(function (f) { return data[f] === undefined || data[f] === ''; });
  return missing.length ? 'Missing fields: ' + missing.join(', ') : null;
}

module.exports = {
  all: function () { return db.all(COLLECTION); },
  find: function (id) { return db.find(COLLECTION, id); },
  create: function (data) { return db.insert(COLLECTION, data); },
  update: function (id, data) { return db.update(COLLECTION, id, data); },
  remove: function (id) { return db.remove(COLLECTION, id); },
  validate: validate,
  REQUIRED: REQUIRED
};
