'use strict';

import delay from './delay';
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


const generatePositionId = ()=> {
  return positions.length;
};

class PositionApi {

  static getAllPositions() {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        resolve(Object.assign([], positions));
      }, delay);
    })
  }

  static createPosition(feedback) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        positions.push(feedback);
        resolve(feedback);
      }, delay);
    })
  }

  static getPositionById(id) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        let position = positions.filter((position)=> {
          return position.id === parseInt(id)
        })[0];
        if (position) {
          resolve(Object.assign({}, position));
        }
      }, delay);
    })
  }



  static editPosition(givenPosition) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> {
        let position = positions.filter((position)=> {
          return position.id === parseInt(position.id)
        })[0];
        let indexOfEditedElement = positions.indexOf(position);
        positions = [...positions.splice(0, indexOfEditedElement),
          givenPosition,
          ...positions.splice(indexOfEditedElement + 1)];
        resolve(givenPosition)
      }, delay);
    })
  }


}

export default PositionApi;
