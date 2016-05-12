'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';
/* Populated by react-webpack-redux:reducer */

class FeedbackListContainer extends Component{

  static propTypes={
    feedbackList:PropTypes.array.isRequired
  };
//
  render(){
    let listToRender=this.props.feedbackList.map((item) => {
      return(
      <tr>
        <td>{item.name}</td>
        <td>{item.position}</td>
        <td>{item.recruiter}</td>
        <td>{item.reviewer}</td>
        <td>{item.score}</td>
      </tr>)
    });

    return(
    <div>
      <Link to='/feedback/new'>Add new feedback</Link>
        <table className='table table-striped table-bordered'>
          <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Recruiter</th>
                <th>Reviewer</th>
                <th>Score</th>
              </tr>
          </thead>
          <tbody>
          {listToRender}
          </tbody>
        </table>
    </div>
    );
  }
}

function mapStateToProps(state){
  const props={feedbackList:state.feedbacks};
  return props;
}
export default connect(mapStateToProps)(FeedbackListContainer);
