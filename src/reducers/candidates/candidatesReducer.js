"use strict";

import * as types from '../../actions/actionTypes';
import initialState from '../initialState.js'

export default function(state = initialState.candidates, action) {

  switch(action.type) {

    case types.LOAD_CANDIDATES_SUCCESS:
        debugger;
          return action.payload;
      break;

    default: {
      return state;
    }
  }
}

export function getCandidatesFormattedForDropdown(state){
  console.log(state);
  return state.map((item)=>{
    return {
      value: item.id,
      text: item.name
    };
  })
}


