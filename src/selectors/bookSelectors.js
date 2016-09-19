'use strict';

export function getBookById(books,id){
  return books.byId[id];
}

export function getAllBooks(books){
  return books.bookIds.map((id)=>{
    return getBookById(books,id);
  });
}

