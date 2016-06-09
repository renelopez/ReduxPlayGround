'use strict';

import * as types from './actionTypes';
import * as ajaxActions from './ajaxActions';
import bookApi from '../api/mockBook';

export function selectBook(book) {
  return { type: types.SELECT_BOOK,payload:book };
}

export function loadBooksSuccess(books) {
  return { type: types.LOAD_BOOKS_SUCCESS,payload:books};
}

export function getBookByIdSuccess(book) {
  return { type: types.GET_BOOK_BY_ID_SUCCESS,payload:book};
}

export function loadBooks(){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return bookApi.getAllBooks().then((books)=>{
      dispatch(loadBooksSuccess(books))
    }).catch((error)=>{
      throw error;
    });
  }
}

export function getBookById(bookId){
  return function(dispatch){
    return bookApi.getBookById(bookId).then((book)=>{
      dispatch(getBookByIdSuccess(book))
    }).catch((error)=>{
      throw error;
    });
  }
}






