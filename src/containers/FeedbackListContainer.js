'use strict';

import React, {
  Component,
  PropTypes
} from 'react';


import { connect } from 'react-redux';
/* Populated by react-webpack-redux:reducer */

class FeedbackListContainer extends Component{

  static propTypes={
    feedbackList:PropTypes.array.isRequired
  };
//
  render(){
    <FeedbackListComponent list={this.props.feedbackList} />
  }
}

function mapStateToProps(state){
  const props={feedbackList:state.feedbacks};
  return props;
}
export default connect(mapStateToProps)(FeedbackListContainer);
