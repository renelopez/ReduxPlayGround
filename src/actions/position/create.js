import {CREATE_POSITION} from './../const';

module.exports = function(position) {
  return { type: CREATE_POSITION,payload:position };
};
