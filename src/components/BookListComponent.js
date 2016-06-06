import React from 'react';

let BookList = ({books,onSelectBook}) => {
  let booksToRender = books.map((book) => {
    return (
        <li key={book.title} className="list-group-item" onClick={() => {onSelectBook(book)}}>
          <span>{book.title}</span>
          <span>{book.price}</span>
        </li>)
  });

  return (
      <div className="col-md-5">
        <ul className="list-group">
          {booksToRender}
        </ul>
      </div>
  )
};

export default BookList;
