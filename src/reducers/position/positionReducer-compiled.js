"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../../actions/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

var _redux = require('redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var byId = function byId() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.LOAD_POSITIONS_SUCCESS:
    case actionTypes.CREATE_POSITION_SUCCESS:
      {
        return _extends({}, state, action.response.entities.positions);
      }
    case actionTypes.EDIT_POSITION_SUCCESS:
      {
        return _extends({}, state, _defineProperty({}, action.editedId, action.editedItem));
      }
    default:
      return state;
  }
};

var positionIds = function positionIds() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.CREATE_POSITION_SUCCESS:
      {
        return [].concat(_toConsumableArray(state), [action.response.result]);
      }
    default:
      return state;
  }
};

var positionsModule = (0, _redux.combineReducers)({
  byId: byId,
  positionIds: positionIds
});

exports.default = positionsModule;

//# sourceMappingURL=positionReducer-compiled.js.map