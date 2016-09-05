'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayOfBooks = exports.books = undefined;

var _normalizr = require('normalizr');

var books = exports.books = new _normalizr.Schema('books');
var arrayOfBooks = exports.arrayOfBooks = (0, _normalizr.arrayOf)(books);

//# sourceMappingURL=bookSchema-compiled.js.map