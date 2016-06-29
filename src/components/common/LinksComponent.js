'use strict';
//
import { Link } from 'react-router';
import React from 'react';

const Links= () => (

  <nav className='nav navbar-default'>
    <div className='container-fluid'>
      <ul className='nav navbar-nav'>
        <li><Link to='/'>Feedtrack</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/feedbacks'>Feedbacks</Link></li>
        <li><Link to='/position'>Positions</Link></li>
      </ul>
    </div>
  </nav>

);

export default Links;
