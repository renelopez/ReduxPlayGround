"use strict";
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import booksReducer from '../reducers/books/booksReducer.js';
import selectedBook from '../reducers/books/selectedBookReducer.js';
import feedbacks from '../reducers/feedbacks/feedbacksReducer.js';
import feedbackDetails from '../reducers/feedbacks/feedbackDetailsReducer.js';
import ajaxReducer from '../reducers/common/ajaxReducer.js';
import candidatesReducer,* as fromCandidates from '../reducers/candidates/candidatesReducer';


const reducers = { 
                   ajaxCallsInProgress:ajaxReducer, 
                   books: booksReducer,
                   candidates:candidatesReducer,
                   selectedBook: selectedBook,
                   feedbacks: feedbacks,
                   feedbackDetails: feedbackDetails,
                   routing: routerReducer};
export default combineReducers(reducers);


export function getCandidatesFormattedForDropdown(state){
  return fromCandidates.getCandidatesFormattedForDropdown(state.candidates);
}
