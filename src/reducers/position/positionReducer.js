"use strict";

import * as actionTypes from '../../actions/actionTypes';
import {combineReducers} from 'redux'

const byId = function(state = {}, action) {

  switch (action.type) {

    case actionTypes.LOAD_POSITIONS_SUCCESS:
    {
      return {
        ...state,
        ...action.response.entities.positions
      };
    }
    default:
      return state;
  }
};

const positionIds=function(state=[],action) {
  switch (action.type) {
    case actionTypes.CREATE_POSITION_SUCCESS: {
      return [...state, action.response.result]
    }
    d efault:
      return state;
  }
};

const positionsModule=combineReducers({
  byId:byId,
  positionIds:positionIds
});

export default positionsModule;


