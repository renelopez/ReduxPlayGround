'use strict';
import  React, {Component, PropTypes} from 'react';

import PositionForm from './PositionFormComponent.js'

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {createPosition} from '../../actions/positionActions';

class AddPositionContainer extends Component {

  static propTypes={
    actions:PropTypes.object.isRequired
  };
  
  onSubmit = (feedbackValues) => {
    this.props.actions.createFeedback(feedbackValues);
  };

  render() {

    return (
        <div>
          <PositionForm onSubmit={this.onSubmit} />
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    createPosition
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(null, mapDispatchToProps)(AddPositionContainer);
