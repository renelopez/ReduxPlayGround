'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBook = selectBook;
exports.loadBooksSuccess = loadBooksSuccess;
exports.loadBooksFailure = loadBooksFailure;
exports.getBookByIdSuccess = getBookByIdSuccess;
exports.getBookByIdFailure = getBookByIdFailure;
exports.loadBooks = loadBooks;
exports.getBookById = getBookById;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _ajaxActions = require('./ajaxActions');

var ajaxActions = _interopRequireWildcard(_ajaxActions);

var _mockBook = require('../api/mockBook');

var _mockBook2 = _interopRequireDefault(_mockBook);

var _normalizr = require('normalizr');

var _bookSchema = require('../schemas/bookSchema');

var schema = _interopRequireWildcard(_bookSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function selectBook(book) {
  return { type: types.SELECT_BOOK, payload: book };
}

function loadBooksSuccess(books) {
  console.log("Without normalizr", books);
  console.log('Normalized', (0, _normalizr.normalize)(books, schema.arrayOfBooks));
  return { type: types.LOAD_BOOKS_SUCCESS, response: (0, _normalizr.normalize)(books, schema.arrayOfBooks) };
}

function loadBooksFailure(error) {
  return { type: types.LOAD_BOOKS_FAILURE, payload: error };
}

function getBookByIdSuccess(book) {
  return { type: types.GET_BOOK_BY_ID_SUCCESS, payload: book };
}

function getBookByIdFailure(error) {
  return { type: types.GET_BOOK_BY_ID_FAILURE, payload: error };
}

function loadBooks() {
  ajaxActions.beginAjaxCall();
  return function (dispatch) {
    return _mockBook2.default.getAllBooks().then(function (books) {
      dispatch(loadBooksSuccess(books));
    }, function (error) {
      dispatch(loadBooksFailure(error));
    });
  };
}

function getBookById(bookId) {
  return function (dispatch) {
    return _mockBook2.default.getBookById(bookId).then(function (book) {
      dispatch(getBookByIdSuccess(book));
    }, function (error) {
      dispatch(getBookByIdFailure(error));
    });
  };
}

//# sourceMappingURL=bookActions-compiled.js.map