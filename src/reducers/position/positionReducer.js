

import * as actionTypes from '../../actions/actionTypes';
import initialState from '../initialState.js'
import _ from 'lodash';

module.exports = function(state = initialState.positions, action) {

  switch(action.type) {

    case actionTypes.LOAD_POSITIONS_SUCCESS:{
      return action.payload;
    }

    case actionTypes.CREATE_POSITION:{
      return [...state, action.payload];
    }

    case actionTypes.EDIT_POSITION:{
      let indexOfEditElement= _.findIndex(state,(item)=>{return item.id === action.payload.id});
      return [...state.slice(0,indexOfEditElement),
              action.payload,
              ...state.slice(indexOfEditElement + 1 )]
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};
