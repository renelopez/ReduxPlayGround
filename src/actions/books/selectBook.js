import {SELECT_BOOK} from './../const';

export default function(book) {
  return { type: SELECT_BOOK,payload:book };
};
