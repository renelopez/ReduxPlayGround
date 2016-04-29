/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = [
  {
      name:'.Net Developer Feedback for FMI',
      position:'.Net Developer',
      recruiter:'Jennifer Mugford',
      reviewer:'Rene Lopez',
      score:'9.0',
      description:'It was good, I liked it.',
      creationDate:new Date()
  },
  {
    name:'Java Developer Feedback for Vesta',
    position:'Java Developer',
    recruiter:'Karla Montoya',
    reviewer:'Joe Zepeda',
    score:'7.0',
    description:'Great but needs more.',
    creationDate:new Date()
  },
  {
    name:'.Net Developer Feedback',
    position:'Java Developer',
    recruiter:'Francisca Molina',
    reviewer:'Francisco Lopez',
    score:'10.0',
    description:'Awesome, I liked it.',
    creationDate:new Date()
  }
];

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */

  switch(action.type) {

    case 'FEEDBACKS':
    {
      // Modify next state depending on the action and return it
      let nextState = Object.assign([], state);
      return nextState;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};