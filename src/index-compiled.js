'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _AppComponent = require('./components/AppComponent');

var _AppComponent2 = _interopRequireDefault(_AppComponent);

var _BookComponent = require('./components/book/BookComponent');

var _BookComponent2 = _interopRequireDefault(_BookComponent);

var _HomeComponent = require('./components/HomeComponent');

var _HomeComponent2 = _interopRequireDefault(_HomeComponent);

var _FeedbackDetailsContainer = require('./components/feedback/FeedbackDetailsContainer');

var _FeedbackDetailsContainer2 = _interopRequireDefault(_FeedbackDetailsContainer);

var _ManageFeedbackDetailsContainer = require('./components/feedback/ManageFeedbackDetailsContainer');

var _ManageFeedbackDetailsContainer2 = _interopRequireDefault(_ManageFeedbackDetailsContainer);

var _PositionListContainer = require('./components/position/PositionListContainer');

var _PositionListContainer2 = _interopRequireDefault(_PositionListContainer);

var _ManagePositionDetailsContainer = require('./components/position/ManagePositionDetailsContainer');

var _ManagePositionDetailsContainer2 = _interopRequireDefault(_ManagePositionDetailsContainer);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _FeedbackListContainer = require('./components/feedback/FeedbackListContainer');

var _FeedbackListContainer2 = _interopRequireDefault(_FeedbackListContainer);

var _feedbackActions = require('./actions/feedbackActions');

var _bookActions = require('./actions/bookActions');

var _positionActions = require('./actions/positionActions.js');

var _reactRedux = require('react-redux');

var _stores = require('./stores');

var _stores2 = _interopRequireDefault(_stores);

var _initialState = require('./reducers/initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');

var store = (0, _stores2.default)();
store.dispatch((0, _feedbackActions.loadFeedbacks)());
store.dispatch((0, _bookActions.loadBooks)());
store.dispatch((0, _positionActions.loadPositions)());

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouter.Router,
    { history: history },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _AppComponent2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomeComponent2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'feedbacks', component: _FeedbackListContainer2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'feedbacks/create', component: _ManageFeedbackDetailsContainer2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'feedbacks/:id', component: _FeedbackDetailsContainer2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'feedbacks/edit/:id', component: _ManageFeedbackDetailsContainer2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'books', component: _BookComponent2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'position', component: _PositionListContainer2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: 'position/edit/:id', component: _ManagePositionDetailsContainer2.default })
    )
  )
), document.getElementById('app'));

//# sourceMappingURL=index-compiled.js.map