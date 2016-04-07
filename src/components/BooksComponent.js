require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let BooksComponent = ({items}) => {

    let itemsToRender = items.map((item) => {
    return(
        <li className="list-group-item">
          <span>{item.title}</span>
          <span>{item.price}</span>
        </li>
    );
  });

  return (
    <div className="col-md-5">
      <ul className="list-group">
        {itemsToRender}
      </ul>
    </div>
  )
};

export default BooksComponent;
