"use strict";

import {LOAD_BOOKS_SUCCESS} from '../../actions/actionTypes';
import initialState from '../initialState'
import {SELECT_BOOK} from '../../actions/actionTypes';
import {combineReducers} from 'redux'

const byId = (state = {}, action) => {
  if (action.response) {
    return {...state,
            ...action.response.entities.books}
  }
  else{
    return state;
  }
};

const selectedBook = (state = {}, action) => {

  switch(action.type) {

    case SELECT_BOOK:
    {
      // Modify next state depending on the action and return it
      return action.payload;
    }
  }

  return state;
};

const bookIds = (state=[],action)=>{
  switch (action.type){
    case LOAD_BOOKS_SUCCESS:{
      return action.response.result;
    }
  }
  return state;
};



const booksModule=combineReducers({
    selectedBook: selectedBook,
    byId: byId,
    bookIds:bookIds
  }
);


export default booksModule;
