/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {CREATE_POSITION,EDIT_POSITION} from '../../actions/actionTypes';
import initialState from '../initialState.js'
import _ from 'lodash';

module.exports = function(state = initialState.positions, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {

    case 'POSITION':
    {
      // Modify next state depending on the action and return it
      return Object.assign([], state);
    }
    case CREATE_POSITION:{
      return [...state, action.payload];
    }

    case EDIT_POSITION:{
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
