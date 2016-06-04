import React from 'react';

let BookList = ({items}) => {
  let itemsToRender = items.map((item) => {
    return (
        <li key={item.title} className="list-group-item" onClick={() => {this.props.actions.selectBook(item)}}>
          <span>{item.title}</span>
          <span>{item.price}</span>
        </li>)
  });

  return (
      <div className="col-md-5">
        <ul className="list-group">
          {itemsToRender}
        </ul>
      </div>
  )
};

export default BookList;
