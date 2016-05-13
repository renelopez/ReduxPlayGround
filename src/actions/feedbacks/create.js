import {CREATE_FEEDBACK} from './../const';

module.exports = function(feedback) {
  return { type: CREATE_FEEDBACK,payload:feedback };
};
