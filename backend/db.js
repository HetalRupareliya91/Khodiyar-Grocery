// Khodiyar Grocery API - tiny JSON file database
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'data.json');
let store = {};
try { store = JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch (e) { store = {}; }

function save() { fs.writeFileSync(FILE, JSON.stringify(store, null, 2)); }
function col(name) { if (!store[name]) store[name] = []; return store[name]; }

module.exports = {
  all: function (name) { return col(name); },
  find: function (name, id) {
    return col(name).find(function (r) { return r.id === Number(id); });
  },
  insert: function (name, data) {
    const rows = col(name);
    const row = Object.assign({ id: rows.length ? rows[rows.length - 1].id + 1 : 1 }, data,
      { createdAt: new Date().toISOString() });
    rows.push(row); save(); return row;
  },
  update: function (name, id, data) {
    const row = this.find(name, id);
    if (!row) return null;
    Object.assign(row, data, { id: row.id, updatedAt: new Date().toISOString() });
    save(); return row;
  },
  remove: function (name, id) {
    const rows = col(name);
    const i = rows.findIndex(function (r) { return r.id === Number(id); });
    if (i === -1) return false;
    rows.splice(i, 1); save(); return true;
  }
};
