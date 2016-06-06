'use strict';

import React, {
  Component,
  PropTypes
} from 'react';


import { connect } from 'react-redux';
import FeedbackListComponent from '../components/FeedbackListComponent';
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
  const props={feedbackList:state.feedbacks};
  return props;
}
export default connect(mapStateToProps)(FeedbackListContainer);
