require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');


import React from 'react';
import { render } from 'react-dom';


import App from './components/AppComponent';
import BookComponent from './components/BookComponent';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import FeedBackListContainer from './containers/FeedbackListContainer';

import { Provider } from 'react-redux';
import configureStore from './stores';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
          <Route path="/feedbacks" component={FeedBackListContainer} />
          <Route path="/books" component={BookComponent} />
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'));
