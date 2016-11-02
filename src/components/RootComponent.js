import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { IndexRoute,Router, Route } from 'react-router';
import App from './AppComponent';
import BookComponent from './book/BookComponent';
import HomeComponent from './HomeComponent';
import FeedbackDetailsContainer from './feedback/FeedbackDetailsContainer';
import ManageFeedbackDetailsContainer from './feedback/ManageFeedbackDetailsContainer';
import PositionListContainer from './position/PositionListContainer';
import ManagePositionDetailsContainer from './position/ManagePositionDetailsContainer'
import FeedBackListContainer from './feedback/FeedbackListContainer';

const Root = ({ store ,history }) => (
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
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;