'use strict';
import React, {Component, PropTypes} from 'react';

import FeedbackForm from './FeedbackFormComponent.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFeedback} from '../../actions/feedbackActions'

class AddFeedbackContainer extends Component {

  static propTypes={
    actions:PropTypes.object.isRequired
  };
  
  state={
    
  };

  onSubmit = (feedbackValues) => {
    this.props.actions.createFeedback(feedbackValues);
  };

  render() {

    return (
        <div>
          <FeedbackForm onSubmit={this.onSubmit} />
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    createFeedback
  };
  return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(null, mapDispatchToProps)(AddFeedbackContainer);
