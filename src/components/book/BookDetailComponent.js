'use strict';
import React from 'react';

const BookDetailComponent = ({book})=> {
  if (Object.keys(book).length === 0 && book.constructor === Object) {
    return (
      <div className="container-fluid">
        <h2>Please choose a book from the menu to see its details.</h2>
      </div>
    )
  }
  else {
    return (
      <div className="container-fluid">
        <h3>Details for Feedback {book.title}</h3>
        <div className="row">
          <label className="col-md-2 control-label ">Price</label>
          <div className="col-md-10">
            <p>{book.price}</p>
          </div>
        </div>

        <div className="row">
          <label className="col-md-2 control-label ">Age</label>
          <div className="col-md-10">
            <p>{book.age}</p>
          </div>
        </div>

        <div className="row">
          <label className="col-md-2 control-label ">Edition</label>
          <div className="col-md-10">
            <p>{book.edition}</p>
          </div>
        </div>

        <div className="row">
          <label className="col-md-2 control-label ">Number of Pages</label>
          <div className="col-md-10">
            <p>{book.numberOfPages}</p>
          </div>
        </div>

        <div className="row">
          <label className="col-md-2 control-label ">Rating</label>
          <div className="col-md-10">
            <p>{book.rating}</p>
          </div>
        </div>

        <div className="row">
          <label className="col-md-2 control-label ">Genre</label>
          <div className="col-md-10">
            <p>{book.genre}</p>
          </div>
        </div>

      </div>
    )
  }
};

BookDetailComponent.propTypes = {
  book: React.PropTypes.object.isRequired
};

export default BookDetailComponent;
