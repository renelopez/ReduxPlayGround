/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const reducers = { books: require('../reducers/books/booksReducer.js'),
                   selectedBook: require('../reducers/books/selectedBookReducer.js'),
                   feedbacks: require('../reducers/books/feedbacksReducer.js'),
                   routing: routerReducer};
module.exports = combineReducers(reducers);
