'use strict';
import  React, {Component, PropTypes} from 'react';

import FeedbackForm from '../components/FeedbackFormComponent.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
  const actions = {
    createFeedback: require('../actions/feedbacks/create')
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(null, mapDispatchToProps)(AddFeedbackContainer);
