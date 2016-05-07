"use strict";

import { Link } from 'react-router';
import React from 'React';

const Links= () => (

  <nav className="nav navbar-default">
    <div className="container fluid">
      <ul className="nav navbar-nav">
        <li><Link to="/">Books</Link></li>
      </ul>
    </div>
  </nav>

);

export default Links;
