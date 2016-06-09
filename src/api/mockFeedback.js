'use strict';

import delay from './delay';
let feedbacks = [
  {
    id: 1,
    name: 'Vesta Developer for Telcel',
    position: '.Net Developer',
    recruiter: 'Jennifer Mugford',
    candidate: 'Oscar Perez',
    reviewer: 'Rene Lopez',
    customer: 'Vesta',
    type: 'Phone Interview',
    score: '9.0',
    comments: 'It was good, I liked it.',
    creationDate: new Date().toLocaleDateString()
  },
  {
    id: 2,
    name: 'FMI Developer for Pharma',
    position: 'Java Developer',
    recruiter: 'Karla Montoya',
    candidate: 'Negrito Medina',
    reviewer: 'Joe Zepeda',
    type: 'Practice Interview',
    customer: 'Foundation Medicine',
    score: '7.0',
    comments: 'Great but needs more.',
    creationDate: new Date().toLocaleDateString()
  },
  {
    id: 3,
    name: 'Java Bofi for Backend',
    position: 'Java Developer',
    recruiter: 'Francisca Molina',
    customer: 'Bank Of Internet',
    type: 'Practice Interview',
    candidate: 'Jimena Sanchez',
    reviewer: 'Francisco Lopez',
    score: '10.0',
    comments: 'Awesome, I liked it.',
    creationDate: new Date().toLocaleDateString()
  }
];

const generateId = ()=> {
  return feedbacks.length;
};

class FeedbackApi {
  static getAllFeedbacks() {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(Object.assign([], feedbacks));
      }, delay);
    })
  }

  static getFeedbackById(id) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        let feedback = feedbacks.filter((feedback)=> {
          return feedback.id === parseInt(id)
        })[0];
        if (feedback) {
          resolve(Object.assign({}, feedback));
        }
      }, delay);
    })
  }

  static editFeedback(givenFeedback) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        let feedback = feedbacks.filter((feedback)=> {
          return feedback.id === parseInt(givenFeedback.id)
        })[0];
        let indexOfEditedElement = feedbacks.indexOf(feedback);
        feedbacks = [...feedbacks.splice(0, indexOfEditedElement),
          givenFeedback,
          ...feedbacks.splice(indexOfEditedElement + 1)];
        resolve(givenFeedback)
      }, delay);
    })
  }
}

export default FeedbackApi;
