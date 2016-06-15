'use strict';

import delay from './delay';
let feedbacks = [
  {
    id: 1,
    name: 'Vesta Developer for Telcel',
    position: '.Net Developer',
    recruiter: 'Jennifer Mugford',
    candidate: 1,
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
    candidate: 3,
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
    candidate: 2,
    reviewer: 'Francisco Lopez',
    score: '10.0',
    comments: 'Awesome, I liked it.',
    creationDate: new Date().toLocaleDateString()
  }
];
let positions=[
  {
    id:1,
    name:'Vesta Developer Senior',
    description:'We require a Senior Developer to lead our set of products from our company',
    skills:['Java','Spring','HTML5','Angular 2','Webpack']
  },
  {
    id:2,
    name:'QA Engineer Junior',
    description:'We require a QA Engineer to lead our set of products from our company',
    skills:['ISTQB','Test Case','Regression','Automation Testing']
  },
  {
    id:3,
    name:'.NET Developer Senior',
    description:'We require a .NET Senior Developer to lead our set of products from our company',
    skills:['.NET Core','SQL Server','Entity Framework','Angular 2','Webpack']
  },
  {
    id:4,
    name:'SCRUM Master',
    description:'We require a SCRUM Master to lead our set of products from our company',
    skills:['SCRUM','Management','Leadership']
  }
];
let candidates=[
  {
    id:1,
    name:'Rene Jezrael Lopez Cano',
    description:'We require a Senior Developer to lead our set of products from our company',
    skills:['Java','Spring','HTML5','Angular 2','Webpack'],
    positions:[1,4]
    
  },{
    id:2,
    name:'Mario Hou Rodriguez',
    description:'A developer with PUMP',
    skills:['Imitaciones','Pump it up','Produccion'],
    positions:[1,2]
  },{
    id:3,
    name:'Angel de Toluca',
    description:'MPF Ganador que mas quieres',
    skills:['Pump it up','Chilango','Albures'],
    positions:[3]
  },{
    id:4,
    name:'JonaLoco',
    description:'El mejor uberista que puedes encontrar',
    skills:['Uber','SCRUM Master','Programming'],
    positions:[3,4]
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

  static getAllPositions() {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(Object.assign([], positions));
      }, delay);
    })
  }

  static getAllCandidates() {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(Object.assign([], candidates));
      }, delay);
    })
  }

  static createFeedback(feedback) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        feedbacks.push(feedback);
        resolve(feedback);
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
