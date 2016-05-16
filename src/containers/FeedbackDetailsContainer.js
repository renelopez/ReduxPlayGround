'use strict';
import  React, {Component, PropTypes} from 'react';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class FeedbackDetailsContainer extends Component {
  constructor(props){
    super(props);
    props.actions.details(props.id);
  }

  render() {

    return (
        <div className="container-fluid">
          <h3>Details for Feedback {this.props.feedbackDetails.name}</h3>
          <div className="row">
          <div className="col-md-6">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <span>Id</span>
              </div>
              <div className="col-md-10">
                <span>{this.props.feedbackDetails.id}</span>
              </div>
            </div>
          </div>
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

function mapStateToProps(state,ownProps) {

  const props = {feedbackDetails: state.feedbackDetails,id:ownProps.params.id};
  return props;
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDetailsContainer);
