/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {CREATE_FEEDBACK,EDIT_FEEDBACK,LOAD_FEEDBACKS_SUCCESS} from '../../actions/actionTypes';
import initialState from '../initialState.js'
import _ from 'lodash';

export default function(state = initialState.feedbacks, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {

    case CREATE_FEEDBACK:{
      return [...state, action.payload];
    }

    case EDIT_FEEDBACK:{
      let indexOfEditElement= _.findIndex(state,(item)=>{return item.id === action.payload.id});
      return [...state.slice(0,indexOfEditElement),
              action.payload,
              ...state.slice(indexOfEditElement + 1 )]
    }

    case LOAD_FEEDBACKS_SUCCESS:
          return action.payload;


    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
