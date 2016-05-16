import {FEEDBACK_DETAILS} from './../const';

module.exports = function(id) {
  return { type: FEEDBACK_DETAILS,payload:id };
};
