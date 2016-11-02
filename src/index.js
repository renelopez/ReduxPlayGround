require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');


import React from 'react';
import { render } from 'react-dom';



import { syncHistoryWithStore } from 'react-router-redux'


import {loadFeedbacks} from './actions/feedbackActions';
import {loadBooks} from './actions/bookActions';
import {loadPositions} from './actions/positionActions.js';
import { browserHistory } from 'react-router';
import Root from './components/RootComponent.js'

import configureStore from './stores';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
store.dispatch(loadFeedbacks());
store.dispatch(loadBooks());
store.dispatch(loadPositions());


render((
    <Root store={store} history={history}/>
),document.getElementById('app'));
