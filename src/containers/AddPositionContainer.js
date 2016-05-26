'use strict';
import  React, {Component, PropTypes} from 'react';

import PositionForm from '../components/PositionFormComponent.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AddPositionContainer extends Component {


  onSubmit = (feedbackValues) => {
    this.props.actions.createFeedback(feedbackValues);
  };

  render() {

    return (
        <div>
          <PositionForm onSubmit={this.onSubmit}></PositionForm>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    createPosition: require('../actions/position/create')
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(null, mapDispatchToProps)(AddPositionContainer);
