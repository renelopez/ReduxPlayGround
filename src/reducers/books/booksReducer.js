"use strict";

import {LOAD_BOOKS_SUCCESS} from '../../actions/actionTypes';
import {SELECT_BOOK} from '../../actions/actionTypes';
import {combineReducers} from 'redux'

const byId = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return {
      ...state,
      ...action.response.entities.books
    };
    default: {
      return state;
    }
  }
};

const selectedBook = (state = {}, action) => {

  switch (action.type) {

    case SELECT_BOOK: {
      // Modify next state depending on the action and return it
      return action.payload;
    }
  }

  return state;
};

const allIds = (state = [], action)=> {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS: {
      return action.response.result;
    }
  }
  return state;
};


const bookModule = combineReducers({
    selectedBook: selectedBook,
    byId: byId,
    allIds: allIds
  }
);


export default bookModule;
