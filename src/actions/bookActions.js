import {BOOKS,SELECT_BOOK} from './actionTypes';

export function allBooks() {
  return { type: BOOKS };
}

export function selectBook(book) {
  return { type: SELECT_BOOK,payload:book };
}
