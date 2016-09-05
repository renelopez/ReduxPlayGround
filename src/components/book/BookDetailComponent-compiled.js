'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookDetailComponent = function BookDetailComponent(_ref) {
  var book = _ref.book;

  if (Object.keys(book).length === 0 && book.constructor === Object) {
    return _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'h2',
        null,
        'Please choose a book from the menu to see its details.'
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'h3',
        null,
        'Details for Feedback ',
        book.title
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'label',
          { className: 'col-md-2 control-label ' },
          'Price'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-10' },
          _react2.default.createElement(
            'p',
            null,
            book.price
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'label',
          { className: 'col-md-2 control-label ' },
          'Age'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-10' },
          _react2.default.createElement(
            'p',
            null,
            book.age
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'label',
          { className: 'col-md-2 control-label ' },
          'Edition'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-10' },
          _react2.default.createElement(
            'p',
            null,
            book.edition
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'label',
          { className: 'col-md-2 control-label ' },
          'Number of Pages'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-10' },
          _react2.default.createElement(
            'p',
            null,
            book.numberOfPages
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'label',
          { className: 'col-md-2 control-label ' },
          'Rating'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-10' },
          _react2.default.createElement(
            'p',
            null,
            book.rating
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'label',
          { className: 'col-md-2 control-label ' },
          'Genre'
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-10' },
          _react2.default.createElement(
            'p',
            null,
            book.genre
          )
        )
      )
    );
  }
};

BookDetailComponent.propTypes = {
  book: _react2.default.PropTypes.object.isRequired
};

exports.default = BookDetailComponent;

//# sourceMappingURL=BookDetailComponent-compiled.js.map