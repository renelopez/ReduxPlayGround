'use strict';

import {SELECT_BOOK,LOAD_BOOKS_SUCCESS,GET_BOOK_BY_ID_SUCCESS} from './actionTypes';
import bookApi from '../api/mockBook';

export function selectBook(book) {
  return { type: SELECT_BOOK,payload:book };
}

export function loadBooksSuccess(books) {
  return { type: LOAD_BOOKS_SUCCESS,payload:books};
}

export function getBookByIdSuccess(book) {
  return { type: GET_BOOK_BY_ID_SUCCESS,payload:book};
}

export function loadBooks(){
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






