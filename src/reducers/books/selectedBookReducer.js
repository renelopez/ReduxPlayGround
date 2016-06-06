import initialState from '../initialState'
import {SELECT_BOOK} from '../../actions/actionTypes';

export default function(state = initialState.selectedBook, action) {


  switch(action.type) {

    case SELECT_BOOK:
    {
      // Modify next state depending on the action and return it
      return action.payload;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
