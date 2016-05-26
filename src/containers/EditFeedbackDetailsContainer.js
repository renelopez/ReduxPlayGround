'use strict';
import  React, {Component, PropTypes} from 'react';
import FeedbackForm from '../components/FeedbackFormComponent.js'


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class EditFeedbackDetailsContainer extends Component {
  constructor(props) {
    super(props);
    props.actions.details(props.id);
  }

  onSubmit = (feedback) => {
    event.preventDefault();
    this.props.actions.editFeedback(feedback);
  };

  render() {
    return (
       <FeedbackForm isEdit="true" onSubmit={this.onSubmit} data={this.props.feedbackDetails} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    details: require('../actions/feedbacks/details'),
    editFeedback:require('../actions/feedbacks/edit')//
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

function mapStateToProps(state, ownProps) {

  const props = {feedbackDetails: state.feedbackDetails, id: ownProps.params.id};
  return props;
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFeedbackDetailsContainer);
