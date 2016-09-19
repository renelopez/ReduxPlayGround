"use strict";

import * as types from '../../actions/actionTypes';
import {combineReducers} from 'redux'

const byId = function(state = {}, action) {

  switch(action.type) {

    case types.LOAD_CANDIDATES_SUCCESS:
          return {...state,
                  ...action.response.entities.candidates};
      break;

    default: {
      return state;
    }
  }
};

const candidateIds = (state = [], action)=> {
  switch (action.type) {
    case types.LOAD_CANDIDATES_SUCCESS: {
      return action.response.result;
    }
  }
  return state;
};

const candidatesModule=combineReducers({
  byId: byId,
  candidateIds: candidateIds
});

export default candidatesModule;


