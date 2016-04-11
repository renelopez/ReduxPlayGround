require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');


import React from 'react';
import { render } from 'react-dom';


import App from './components/AppComponent';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import { Provider } from 'react-redux';
import configureStore from './stores';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
),document.getElementById('app'));
