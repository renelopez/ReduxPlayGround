'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookById = getBookById;
exports.getAllBooks = getAllBooks;

var _booksReducer = require('../reducers/books/booksReducer');

var _booksReducer2 = _interopRequireDefault(_booksReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getBookById(state, id) {
  return state.books.byId[id];
}

function getAllBooks(state) {
  return state.books.bookIds.map(function (id) {
    return getBookById(state, id);
  });
}

//# sourceMappingURL=bookSelectors-compiled.js.map