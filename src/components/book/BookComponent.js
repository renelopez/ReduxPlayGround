
import React from 'react';
import BooksContainer from './BooksContainer';
import BookDetailContainer from './BookDetailContainer';


let Book = () => (
  <div className="row">
    <div className="col-md-3">
      <BooksContainer />
    </div>
    <div className="col-md-9">
      <BookDetailContainer />
    </div>
  </div>
);

export default Book;
