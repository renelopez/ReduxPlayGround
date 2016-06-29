'use strict';

import React, {
    Component,
    PropTypes
} from 'react';


import {connect} from 'react-redux';
import PositionListComponent from './PositionListComponent';

class PositionListContainer extends Component {


  render() {
    return (
        <PositionListComponent list={this.props.positionList}/>
    )
  }
}

PositionListContainer.propTypes = {
  positionList: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {positionList: state.positions};
}
export default connect(mapStateToProps)(PositionListContainer);
