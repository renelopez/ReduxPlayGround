require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let BooksComponent = ({items}) => (
      <div className="index">
        {items.map = (item) => {
          <div>
            {item}
          </div>
        }}
      </div>
);

export default BooksComponent;
