import initialState from '../initialState.js'

module.exports = function(state = initialState.books, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  

  switch(action.type) {

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};
