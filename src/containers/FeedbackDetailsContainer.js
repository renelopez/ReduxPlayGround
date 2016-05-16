'use strict';
import  React, {Component,PropTypes } from 'react';



import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class FeedbackDetailsContainer extends Component {
  

  render() {

 return(
        <div>

        </div>
     )
  }
 }

function mapDispatchToProps(dispatch) {
  const actions = {
    details: require('../actions/feedbacks/details')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

function mapStateToProps(state) {

  const props = { feedbackDetails: state.feedbackDetails };
  return props;
}
export default connect(mapStateToProps,mapDispatchToProps())(FeedbackDetailsContainer);
