/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {GET_FEEDBACK_BY_ID_SUCCESS} from '../../actions/actionTypes';
import initialState from '../initialState.js'

export default function(state = initialState.feedbackDetails, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  switch(action.type) {

    case GET_FEEDBACK_BY_ID_SUCCESS:{
      debugger;
      return action.payload;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
