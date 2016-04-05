require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let BooksComponent = ({items}) => {

    let itemsToRender = items.map((item) => {
    return(
        <div>
          <span>{item.title}</span>
          <span>{item.price}</span>
        </div>
    );
  });

  return (
      <div className="index">
        {itemsToRender}
      </div>)
};

export default BooksComponent;
