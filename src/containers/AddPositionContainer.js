'use strict';
import  React, {Component, PropTypes} from 'react';

import PositionForm from '../components/PositionFormComponent.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {createPosition} from '../actions/positionActions';

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
  return {actions: bindActionCreators(createPosition, dispatch)};
}

export default connect(null, mapDispatchToProps)(AddPositionContainer);
