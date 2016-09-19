'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookById = getBookById;
exports.getAllBooks = getAllBooks;
function getBookById(books, id) {
  return books.byId[id];
}

function getAllBooks(books) {
  return books.bookIds.map(function (id) {
    return getBookById(books, id);
  });
}

//# sourceMappingURL=bookSelectors-compiled.js.map