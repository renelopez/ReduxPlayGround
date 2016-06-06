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

import booksReducer from '../reducers/books/booksReducer.js';
import selectedBook from '../reducers/books/selectedBookReducer.js';
import feedbacks from '../reducers/feedbacks/feedbacksReducer.js';
import feedbackDetails from '../reducers/feedbacks/feedbackDetailsReducer.js';


const reducers = { books: booksReducer,
                   selectedBook: selectedBook,
                   feedbacks: feedbacks,
                   feedbackDetails: feedbackDetails,
                   routing: routerReducer};
module.exports = combineReducers(reducers);
