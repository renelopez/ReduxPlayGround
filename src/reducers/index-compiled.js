"use strict";

Object.defineProperty(exports, "__esModule", {
                   value: true
});
exports.getCandidatesFormattedForDropdown = getCandidatesFormattedForDropdown;

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _booksReducer = require('../reducers/books/booksReducer.js');

var _booksReducer2 = _interopRequireDefault(_booksReducer);

var _feedbacksReducer = require('../reducers/feedbacks/feedbacksReducer.js');

var _feedbacksReducer2 = _interopRequireDefault(_feedbacksReducer);

var _feedbackDetailsReducer = require('../reducers/feedbacks/feedbackDetailsReducer.js');

var _feedbackDetailsReducer2 = _interopRequireDefault(_feedbackDetailsReducer);

var _positionReducer = require('../reducers/position/positionReducer.js');

var _positionReducer2 = _interopRequireDefault(_positionReducer);

var _positionDetailsReducer = require('../reducers/position/positionDetailsReducer');

var _positionDetailsReducer2 = _interopRequireDefault(_positionDetailsReducer);

var _ajaxReducer = require('../reducers/common/ajaxReducer.js');

var _ajaxReducer2 = _interopRequireDefault(_ajaxReducer);

var _candidatesReducer = require('../reducers/candidates/candidatesReducer');

var fromCandidates = _interopRequireWildcard(_candidatesReducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = {
                   ajaxCallsInProgress: _ajaxReducer2.default,
                   books: _booksReducer2.default,
                   candidates: fromCandidates.default,
                   feedbacks: _feedbacksReducer2.default,
                   positions: _positionReducer2.default,
                   positionDetails: _positionDetailsReducer2.default,
                   feedbackDetails: _feedbackDetailsReducer2.default,
                   routing: _reactRouterRedux.routerReducer
};
exports.default = (0, _redux.combineReducers)(reducers);
function getCandidatesFormattedForDropdown(state) {
                   return fromCandidates.getCandidatesFormattedForDropdown(state.candidates);
}

//# sourceMappingURL=index-compiled.js.map