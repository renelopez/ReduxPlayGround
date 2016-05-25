'use strict';
import  React, {Component, PropTypes} from 'react';
import  Input from '../components/InputComponent';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class EditFeedbackDetailsContainer extends Component {
  constructor(props) {
    super(props);
    props.actions.details(props.id);
  }

  state = {
    name:this.props.feedbackDetails.name,
    position:this.props.feedbackDetails.position,
    recruiter:this.props.feedbackDetails.recruiter,
    candidate:this.props.feedbackDetails.candidate,
    reviewer:this.props.feedbackDetails.reviewer,
    type:this.props.feedbackDetails.type,
    customer:this.props.feedbackDetails.customer,
    score:this.props.feedbackDetails.score,
    comments:this.props.feedbackDetails.comments,
    creationDate:this.props.feedbackDetails.name
  };

  onChange = (name,value) =>{

  };

  render() {

    return (
        <div className="container-fluid">
          <h3>Details for Feedback {this.props.feedbackDetails.name}</h3>
          <Input name="editFeedbackName" type="text" className="form-control" value={this.state.name} onChange={this.onChange} />
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    details: require('../actions/feedbacks/details')
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

function mapStateToProps(state, ownProps) {

  const props = {feedbackDetails: state.feedbackDetails, id: ownProps.params.id};
  return props;
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFeedbackDetailsContainer);
