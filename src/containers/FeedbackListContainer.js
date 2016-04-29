"use strict";

import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/* Populated by react-webpack-redux:reducer */

class FeedbackListContainer extends Component{

  static propTypes={
    feedbackList:PropTypes.array.isRequired
  };

  render(){
    const listToRender=this.props.feedbackList.map((item)=>{
      <tr>
        <td>{item.name}</td>
        <td>{item.position}</td>
        <td>{item.recruiter}</td>
        <td>{item.reviewer}</td>
        <td>{item.score}</td>
      </tr>
    });

    return(
      <table>
        <thead>
          <th>Name</th>
          <th>Position</th>
          <th>Recruiter</th>
          <th>Reviewer</th>
          <th>Score</th>
        </thead>
        <tbody>
        {listToRender}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  const props={feedbackList:state.feedbacks};
  return props;
}
export default connect(mapStateToProps)(FeedbackListContainer);
