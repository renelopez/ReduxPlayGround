import {EDIT_FEEDBACK} from './../const';

module.exports = function(feedback) {
  return { type: EDIT_FEEDBACK,payload:feedback };
};
