'use strict';
import  React, {Component, PropTypes} from 'react';
import FeedbackForm from '../components/FeedbackFormComponent.js'
import {editFeedback,getFeedbackById} from '../actions/feedbackActions';


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class EditFeedbackDetailsContainer extends Component {
  constructor(props) {
    super(props);
    if(props.params.id) {
      props.actions.getFeedbackById(props.params.id).then(()=>{
        this.setState({'feedback':Object.assign({},this.props.feedbackDetails)});
      });
    }
  }

  static propTypes={
    actions:PropTypes.object.isRequired,
    feedbackDetails:PropTypes.object.isRequired
  };

  state = {
    feedback:Object.assign({},this.props.feedbackDetails)
  };

  onChange = (name,value) => {
    let currentState=this.state.feedback;
    currentState[name]=value;
    this.setState(currentState);
  };

  onSubmit=(event) =>{
    event.preventDefault();
    if(!this.props.params.id) {
      this.setState({creationDate: new Date().toLocaleDateString()});
    }
    else{
      this.setState({editionDate:new Date().toLocaleDateString()})
    }
    this.props.actions.editFeedback(this.state.feedback).then(()=>{
      this.context.router.push('/feedbacks');
    });
  };





  render() {
    return (
       <FeedbackForm onChange={this.onChange}
                     onSubmit={this.onSubmit}
                     data={this.state.feedback} />
    )
  }
}

EditFeedbackDetailsContainer.contextTypes={
  router:PropTypes.object
};

function mapDispatchToProps(dispatch) {
  const actions = {
    getFeedbackById,
    editFeedback
  };
  return {actions: bindActionCreators(actions, dispatch)};
}

function mapStateToProps(state, ownProps) {

  let props;
  let feedback={
    'id': '',
    'name': '',
    'position': '',
    'candidate': '',
    'reviewer': '',
    'recruiter': '',
    'type': '',
    'customer': '',
    'score': '',
    'comments': '',
    'creationDate': ''
  };
  if(ownProps.params.id){
    props = {feedbackDetails: state.feedbackDetails};
  }
  else{
    props={feedbackDetails:feedback}
  }

  return props;
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFeedbackDetailsContainer);
