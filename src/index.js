require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');


import React from 'react';
import { render } from 'react-dom';


import App from './components/AppComponent';
import BookComponent from './components/book/BookComponent';
import HomeComponent from './components/HomeComponent';
import FeedbackDetailsContainer from './components/feedback/FeedbackDetailsContainer';
import ManageFeedbackDetailsContainer from './components/feedback/ManageFeedbackDetailsContainer';
import PositionListContainer from './components/position/PositionListContainer';
import ManagePositionDetailsContainer from './components/position/ManagePositionDetailsContainer';

import { IndexRoute,Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import FeedBackListContainer from './components/feedback/FeedbackListContainer';
import {loadFeedbacks} from './actions/feedbackActions';
import {loadBooks} from './actions/bookActions';
import {loadPositions} from './actions/positionActions.js';

import { Provider } from 'react-redux';
import configureStore from './stores';
import initialState from './reducers/initialState';
const store = configureStore();
store.dispatch(loadFeedbacks());
store.dispatch(loadBooks());
store.dispatch(loadPositions());

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
          <IndexRoute component={HomeComponent} />
          <Route path="feedbacks" component={FeedBackListContainer} />
          <Route path="feedbacks/create" component={ManageFeedbackDetailsContainer} />
          <Route path="feedbacks/:id" component={FeedbackDetailsContainer} />
          <Route path="feedbacks/edit/:id" component={ManageFeedbackDetailsContainer} />
          <Route path="books" component={BookComponent} />
          <Route path="position" component={PositionListContainer} />
          <Route path="position/edit/:id" component={ManagePositionDetailsContainer} />
      </Route>
    </Router>
  </Provider>
),document.getElementById('app'));
