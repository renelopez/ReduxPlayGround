"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../../actions/actionTypes');

var _initialState = require('../initialState');

var _initialState2 = _interopRequireDefault(_initialState);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var byId = function byId() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  if (action.response) {
    return _extends({}, state, action.response.entities.books);
  } else {
    return state;
  }
};

var selectedBook = function selectedBook() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];


  switch (action.type) {

    case _actionTypes.SELECT_BOOK:
      {
        // Modify next state depending on the action and return it
        return action.payload;
      }
  }

  return state;
};

var bookIds = function bookIds() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.LOAD_BOOKS_SUCCESS:
      {
        return action.response.result;
      }
  }
  return state;
};

var booksModule = (0, _redux.combineReducers)({
  selectedBook: selectedBook,
  byId: byId,
  bookIds: bookIds
});

exports.default = booksModule;

//# sourceMappingURL=booksReducer-compiled.js.map