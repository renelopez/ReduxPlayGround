'use strict';

import React, {
  Component,
  PropTypes
} from 'react';


import { connect } from 'react-redux';
import FeedbackListComponent from './FeedbackListComponent';
//
class FeedbackListContainer extends Component{

  static propTypes={
    feedbackList:PropTypes.array.isRequired
  };
//
  render(){
    return(
      <FeedbackListComponent list={this.props.feedbackList} />
    )
  }
}

function mapStateToProps(state){
  return {feedbackList:state.feedbacks};
}
export default connect(mapStateToProps)(FeedbackListContainer);
