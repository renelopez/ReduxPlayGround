require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');


import React from 'react';
import { render } from 'react-dom';


import App from './components/AppComponent';
import BookComponent from './components/BookComponent';
import HomeComponent from './components/HomeComponent';
import AddFeedbackContainer from './containers/AddFeedbackContainer';
import FeedbackDetailsContainer from './containers/FeedbackDetailsContainer';
import EditFeedbackDetailsContainer from './containers/EditFeedbackDetailsContainer';

import { IndexRoute,Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import FeedBackListContainer from './containers/FeedbackListContainer';

import { Provider } from 'react-redux';
import configureStore from './stores';
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
          <IndexRoute component={HomeComponent} />
          <Route path="feedbacks" component={FeedBackListContainer} />
          <Route path="feedbacks/create" component={AddFeedbackContainer} />
          <Route path="feedbacks/:id" component={FeedbackDetailsContainer} />
          <Route path="feedbacks/edit/:id" component={EditFeedbackDetailsContainer} />
          <Route path="books" component={BookComponent} />
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'));
