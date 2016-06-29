
import { applyMiddleware,createStore, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export default function(initialState) {
  const store = createStore(reducers, initialState, compose(
      applyMiddleware(thunk,reduxImmutableStateInvariant()),
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
};
