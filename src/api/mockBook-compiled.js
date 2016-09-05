'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _delay = require('./delay');

var _delay2 = _interopRequireDefault(_delay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var books = [{
  id: 1,
  title: 'Orly Chan',
  price: 200,
  author: 'Rene Lopez',
  age: 1902,
  edition: 'Second',
  numberOfPages: 90,
  rating: 5,
  genre: 'Mystery'
}, {
  id: 2,
  title: 'Satan',
  price: 150,
  age: 2012,
  edition: 'Second',
  numberOfPages: 1290,
  rating: 7,
  genre: 'Kabala'
}, {
  id: 3,
  title: 'Harry Potter',
  price: 200,
  age: 1902,
  edition: 'Second',
  numberOfPages: 3590,
  rating: 9,
  genre: 'Drama'
}];

var generateId = function generateId() {
  return books.length;
};

var BookApi = function () {
  function BookApi() {
    _classCallCheck(this, BookApi);
  }

  _createClass(BookApi, null, [{
    key: 'getAllBooks',
    value: function getAllBooks() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(Object.assign([], books));
        }, _delay2.default);
      });
    }
  }, {
    key: 'getBookById',
    value: function getBookById(id) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var book = books.filter(function (book) {
            return book.id === id;
          });
          if (book) {
            resolve(Object.assign({}, book));
          }
        }, _delay2.default);
      });
    }
  }]);

  return BookApi;
}();

exports.default = BookApi;

//# sourceMappingURL=mockBook-compiled.js.map