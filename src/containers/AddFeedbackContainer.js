'use strict';
import  React, {Component, PropTypes} from 'react';

import FeedbackForm from '../components/FeedbackFormComponent.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFeedback} from '../actions/feedbackActions'

class AddFeedbackContainer extends Component {


  onSubmit = (feedbackValues) => {
    this.props.actions.createFeedback(feedbackValues);
  };

  render() {

    return (
        <div>
          <FeedbackForm onSubmit={this.onSubmit}></FeedbackForm>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {  
  return {actions: bindActionCreators(createFeedback, dispatch)};
}
export default connect(null, mapDispatchToProps)(AddFeedbackContainer);
