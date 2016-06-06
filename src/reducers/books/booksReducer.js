import initialState from '../initialState.js'
import {LOAD_BOOKS_SUCCESS} from '../../actions/actionTypes';

export default function (state = initialState.books, action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return action.payload;
    default:
    {
      return state;
    }
  }
}
