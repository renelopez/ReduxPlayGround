'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.positions : arguments[0];
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.LOAD_POSITIONS_SUCCESS:
      {
        return action.payload;
      }

    case actionTypes.CREATE_POSITION:
      {
        return [].concat(_toConsumableArray(state), [action.payload]);
      }

    case actionTypes.EDIT_POSITION:
      {
        var indexOfEditElement = _lodash2.default.findIndex(state, function (item) {
          return item.id === action.payload.id;
        });
        return [].concat(_toConsumableArray(state.slice(0, indexOfEditElement)), [action.payload], _toConsumableArray(state.slice(indexOfEditElement + 1)));
      }

    default:
      {
        /* Return original state if no actions were consumed. */
        return state;
      }
  }
};

var _actionTypes = require('../../actions/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _initialState = require('../initialState.js');

var _initialState2 = _interopRequireDefault(_initialState);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

;

//# sourceMappingURL=positionReducer-compiled.js.map