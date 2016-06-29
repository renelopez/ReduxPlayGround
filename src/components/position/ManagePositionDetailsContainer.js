'use strict';
import  React, {Component, PropTypes} from 'react';
import PositionForm from './PositionFormComponent'
import {getPositionById} from '../../actions/positionActions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManagePositionDetailsContainer extends Component {
  constructor(props) {
    super(props);
    if (props.params.id) {
      props.actions.getPositionById(props.params.id).then(()=> {
        this.setState({'position': Object.assign({}, this.props.positionDetails)});
      });
    }
  }

  state = {
    position: Object.assign({}, this.props.positionDetails),
    isLoading: false
  };

  onChange = (name, value) => {
    let currentState = this.state.position;
    currentState[name] = value;
    this.setState(currentState);
  };

  redirectToList = () => {
    this.setState({isLoading: false});
    this.context.router.push('/candidate');
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({isLoading: true});
    if (!this.props.params.id) {
      this.setState({creationDate: new Date().toLocaleDateString()});
      this.props.actions.createPosition(this.state.position).then(()=> {
        this.redirectToList();
      });
    }
    else {
      this.setState({editionDate: new Date().toLocaleDateString()});
      this.props.actions.editPosition(this.state.position).then(()=> {
        this.redirectToList();
      });
    }

  };


  render() {
    return (
        <PositionForm onChange={this.onChange}
                      onSubmit={this.onSubmit}
                      data={this.state.position}
                      isLoading={this.state.isLoading}
                      options={this.props.candidates}/>
    )
  }
}

ManagePositionDetailsContainer.propTypes = {

};

ManagePositionDetailsContainer.contextTypes = {
  router: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  const actions = {
    getPositionById
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

function mapStateToProps(state, ownProps) {
  let props;
  let position = {
    'name': '',
    'description':'',
    'skills':[]    
  };
  
  if (ownProps.params.id) {
    props = {
      positionDetails: state.positionDetails
    };
  }
  else {
    props = {
      positionDetails: position
    }
  }
  return props;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePositionDetailsContainer);
