'use strict';
import  React, {Component, PropTypes} from 'react';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getFeedbackById} from '../../actions/feedbackActions';

import FeedbackDetailsComponent from './FeedbackDetailsComponent';

class FeedbackDetailsContainer extends Component {
  constructor(props) {
    super(props);
    props.actions.getFeedbackById(props.params.id);
  }

  render() {

    return (
        <FeedbackDetailsComponent details={this.props.feedbackDetails}/>
    )
  }
}

FeedbackDetailsComponent.propTypes = {
  feedbackDetails: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  const actions = {
    getFeedbackById
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

function mapStateToProps(state, ownProps) {
  return {feedbackDetails: state.feedbackDetails, id: ownProps.params.id};
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDetailsContainer);
