/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {CREATE_FEEDBACK} from '../../actions/const';
import {EDIT_FEEDBACK} from '../../actions/const';
import  initialState from './feedbackData';
import _ from 'lodash';

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {

    case 'FEEDBACKS':
    {
      // Modify next state depending on the action and return it
      return Object.assign([], state);
    }
    case CREATE_FEEDBACK:{
      return [...state, action.payload];
    }

    case EDIT_FEEDBACK:{
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
