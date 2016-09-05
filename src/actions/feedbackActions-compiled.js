"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFeedbackSuccess = createFeedbackSuccess;
exports.createFeedbackFailure = createFeedbackFailure;
exports.loadFeedbacksSuccess = loadFeedbacksSuccess;
exports.loadFeedbacksFailure = loadFeedbacksFailure;
exports.getFeedbackByIdSuccess = getFeedbackByIdSuccess;
exports.getFeedbackByIdFailure = getFeedbackByIdFailure;
exports.editFeedbackSuccess = editFeedbackSuccess;
exports.editFeedbackFailure = editFeedbackFailure;
exports.editFeedback = editFeedback;
exports.loadFeedbacks = loadFeedbacks;
exports.getFeedbackById = getFeedbackById;
exports.createFeedback = createFeedback;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _ajaxActions = require('./ajaxActions');

var ajaxActions = _interopRequireWildcard(_ajaxActions);

var _mockFeedback = require('../api/mockFeedback');

var _mockFeedback2 = _interopRequireDefault(_mockFeedback);

var _normalizr = require('normalizr');

var _feedbackSchema = require('../schemas/feedbackSchema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createFeedbackSuccess(createdFeedback) {
  return { type: types.CREATE_FEEDBACK_SUCCESS, payload: createdFeedback };
}

function createFeedbackFailure(error) {
  return { type: types.CREATE_FEEDBACK_FAILURE, payload: error };
}

function loadFeedbacksSuccess(feedbacks) {
  return { type: types.LOAD_FEEDBACKS_SUCCESS, payload: feedbacks };
}

function loadFeedbacksFailure(error) {
  return { type: types.LOAD_FEEDBACKS_FAILURE, payload: error };
}

function getFeedbackByIdSuccess(feedback) {
  return { type: types.GET_FEEDBACK_BY_ID_SUCCESS, payload: feedback };
}

function getFeedbackByIdFailure(error) {
  return { type: types.GET_FEEDBACK_BY_ID_FAILURE, payload: error };
}

function editFeedbackSuccess(feedbackResult) {
  return { type: types.EDIT_FEEDBACK_SUCCESS, payload: feedbackResult };
}

function editFeedbackFailure(error) {
  return { type: types.EDIT_FEEDBACK_FAILURE, payload: error };
}

function editFeedback(feedback) {
  ajaxActions.beginAjaxCall();
  return function (dispatch) {
    return _mockFeedback2.default.editFeedback(feedback).then(function (feedbackResult) {
      dispatch(editFeedbackSuccess(feedbackResult));
    }, function (error) {
      dispatch(editFeedbackFailure(error));
    });
  };
}

function loadFeedbacks() {
  ajaxActions.beginAjaxCall();
  return function (dispatch) {
    return _mockFeedback2.default.getAllFeedbacks().then(function (feedbacks) {
      dispatch(loadFeedbacksSuccess((0, _normalizr.normalize)(feedbacks, _feedbackSchema.arrayOfFeedbacks)));
    }, function (error) {
      dispatch(loadFeedbacksFailure(error));
    });
  };
}

function getFeedbackById(feedbackId) {
  ajaxActions.beginAjaxCall();
  return function (dispatch) {
    return _mockFeedback2.default.getFeedbackById(feedbackId).then(function (feedback) {
      dispatch(getFeedbackByIdSuccess(feedback));
    }, function (error) {
      dispatch(getFeedbackByIdFailure(error));
    });
  };
}

function createFeedback(feedback) {
  ajaxActions.beginAjaxCall();
  return function (dispatch) {
    return _mockFeedback2.default.createFeedback(feedback).then(function (createdFeedback) {
      dispatch(createFeedbackSuccess(createdFeedback));
    }, function (error) {
      dispatch(createFeedbackFailure(error));
    });
  };
}

//# sourceMappingURL=feedbackActions-compiled.js.map