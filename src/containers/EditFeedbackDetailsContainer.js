'use strict';
import  React, {Component, PropTypes} from 'react';
import FeedbackForm from '../components/FeedbackFormComponent.js'
import {editFeedback,setFeedbackDetails} from '../actions/feedbackActions';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class EditFeedbackDetailsContainer extends Component {
  constructor(props) {
    super(props);
    props.actions.setFeedbackDetails(props.id);
  }

  static propTypes={
    actions:PropTypes.object.isRequired,
    feedbackDetails:PropTypes.object.isRequired
  };

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
    setFeedbackDetails,
    editFeedback
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

function mapStateToProps(state, ownProps) {

  const props = {feedbackDetails: state.feedbackDetails, id: ownProps.params.id};
  return props;
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFeedbackDetailsContainer);
