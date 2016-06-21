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

  static propTypes={
    feedbackDetails:PropTypes.object.isRequired
  };

  render() {

    return (
        <FeedbackDetailsComponent details={this.props.feedbackDetails} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getFeedbackById
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

function mapStateToProps(state, ownProps) {

  const props = {feedbackDetails: state.feedbackDetails, id: ownProps.params.id};
  return props;
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackDetailsContainer);
