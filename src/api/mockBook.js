'use strict';

import delay from './delay';
const books=[
  {
    title:'Orly Chan',
    price:200,
    author:'Rene Lopez',
    age:1902,
    edition:'Second',
    numberOfPages:90,
    rating:5,
    genre:'Mystery'
  },
  {
    title:'Satan',
    price:150,
    age:2012,
    edition:'Second',
    numberOfPages:1290,
    rating:7,
    genre:'Kabala'
  },
  {
    title:'Harry Potter',
    price:200,
    age:1902,
    edition:'Second',
    numberOfPages:3590,
    rating:9,
    genre:'Drama'
  }
];

const generateId=()=>{
  return books.length;
};

class BookApi{
  static getAllBooks (){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(Object.assign([],books));
      },delay);
    })
  }

  static getBookById (id){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let book=books.filter((book)=>{return book.id === id});
        if(book) {
          resolve(Object.assign({},book));
        }
      },delay);
    })
  }
}

export default BookApi;
