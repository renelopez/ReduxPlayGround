'use strict';
import booksReducer from '../reducers/books/booksReducer';


export function getBookById(state,id){
  return state.books.byId[id];
}

export function getAllBooks(state){
  return state.books.bookIds.map((id)=>{
    return getBookById(state,id);
  });
}

