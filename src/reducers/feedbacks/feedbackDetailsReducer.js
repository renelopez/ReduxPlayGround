/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */

import {FEEDBACK_DETAILS} from '../../actions/actionTypes';
import initialState from '../initialState.js'
import _ from 'lodash';

module.exports = function(state = {}, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {
    
    case FEEDBACK_DETAILS:{
      const foundElement=_.find(initialState.feedbacks,(item)=>{
        return item.id === parseInt(action.payload)
      });
      return Object.assign({},state,foundElement);
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};
