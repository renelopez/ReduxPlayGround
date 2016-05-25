'use strict';
import  React, {Component, PropTypes} from 'react';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FeedbackDetailsContainer extends Component {
  constructor(props) {
    super(props);
    props.actions.details(props.id);
  }

  render() {

    return (
        <div className="container-fluid">
          <h3>Details for Feedback {this.props.feedbackDetails.name}</h3>
          <div className="form-group">
            <label className="col-md-2 control-label ">Id</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.id}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Position</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.position}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Recruiter</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.recruiter}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Candidate</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.candidate}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Reviewer</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.reviewer}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Type</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.type}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Customer</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.customer}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Score</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.score}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Comments</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.comments}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label ">Creation Date</label>
            <div className="col-md-10">
              <p>{this.props.feedbackDetails.creationDate}</p>
            </div>
          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDetailsContainer);
