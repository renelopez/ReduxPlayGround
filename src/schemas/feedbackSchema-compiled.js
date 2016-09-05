'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayOfFeedbacks = exports.feedback = undefined;

var _normalizr = require('normalizr');

var feedback = exports.feedback = new _normalizr.Schema('feedbacks');
var arrayOfFeedbacks = exports.arrayOfFeedbacks = (0, _normalizr.arrayOf)(feedback);

//# sourceMappingURL=feedbackSchema-compiled.js.map