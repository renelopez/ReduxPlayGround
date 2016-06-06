/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React from 'react';
import BooksContainer from '../containers/BooksContainer';
import BookDetailContainer from '../containers/BookDetailContainer';


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
