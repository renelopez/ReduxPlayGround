import {SELECT_BOOK} from './../const';

module.exports = function(book) {
  return { type: SELECT_BOOK,payload:book };
};
