"use strict";
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import booksReducer from '../reducers/books/booksReducer.js';
import feedbacks from '../reducers/feedbacks/feedbacksReducer.js';
import feedbackDetails from '../reducers/feedbacks/feedbackDetailsReducer.js';
import positionReducer from '../reducers/position/positionReducer.js';
import positionDetails from '../reducers/position/positionDetailsReducer';
import ajaxReducer from '../reducers/common/ajaxReducer.js';
import candidatesReducer,* as fromCandidates from '../reducers/candidates/candidatesReducer';


const reducers = {
                   ajaxCallsInProgress:ajaxReducer,
                   books: booksReducer,
                   candidates:candidatesReducer,
                   feedbacks: feedbacks,
                   positions: positionReducer,
                   positionDetails: positionDetails,
                   feedbackDetails: feedbackDetails,
                   routing: routerReducer
};
export default combineReducers(reducers);


export function getCandidatesFormattedForDropdown(state){
  return fromCandidates.getCandidatesFormattedForDropdown(state.candidates);
}
