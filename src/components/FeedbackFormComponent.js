'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from './InputComponent';


class FeedbackFormComponent extends Component {

  state = {
    name:'',
    position:'',
    recruiter:'',
    candidate:'',
    reviewer:'',
    type:'',
    customer:'',
    score:'',
    comments:'',
    creationDate:null,
    editionDate:null
  };

  componentWillReceiveProps=(nextProps) => {
    if(nextProps.isEdit) {
      this.setState({
        'id': nextProps.data.id,
        'name': nextProps.data.name,
        'position': nextProps.data.position,
        'candidate': nextProps.data.candidate,
        'reviewer': nextProps.data.reviewer,
        'recruiter': nextProps.data.recruiter,
        'type': nextProps.data.type,
        'customer': nextProps.data.customer,
        'score': nextProps.data.score,
        'comments': nextProps.data.comments,
        'creationDate': nextProps.data.creationDate
      });
    }
  };

  onChange = (name,value) => {
      let currentState=this.state;
      currentState[name]=value;
      this.setState(currentState);
  };

  onSubmit=(event) =>{
    event.preventDefault();
    if(this.props.isEdit) {
      this.setState({creationDate: new Date().toLocaleDateString()});
    }
    else{
      this.setState({editionDate:new Date().toLocaleDateString()})
    }
    this.props.onSubmit(this.state);
  };

  render() {
    return(
          <form onSubmit={this.onSubmit}>
            <div className="container-fluid">
              <h3>Details for Feedback {this.state.name}</h3>
              <Input label='Name' name="name" type="text" cssClass="form-control" value={this.state.name} onChange={this.onChange} />
              <Input label='Position' name="position" type="text" cssClass="form-control" value={this.state.position} onChange={this.onChange} />
              <Input label='Candidate' name="candidate" type="text" cssClass="form-control" value={this.state.candidate} onChange={this.onChange} />
              <Input label='Reviewer' name="reviewer" type="text" cssClass="form-control" value={this.state.reviewer} onChange={this.onChange} />
              <Input label='Recruiter' name="recruiter" type="text" cssClass="form-control" value={this.state.recruiter} onChange={this.onChange} />
              <Input label='Type' name="type" type="text" cssClass="form-control" value={this.state.type} onChange={this.onChange} />
              <Input label='Customer' name="customer" type="text" cssClass="form-control" value={this.state.customer} onChange={this.onChange} />
              <Input label='Score' name="score" type="text" cssClass="form-control" value={this.state.score} onChange={this.onChange} />
              <Input label='Comments' name="comments" type="text" cssClass="form-control" value={this.state.comments} onChange={this.onChange} />
              <Input label='Creation Date' name="creationDate" type="text" cssClass="form-control" value={this.state.creationDate} onChange={this.onChange} />
              <input type="submit" className="btn btn-default" />
            </div>
          </form>
    )
  }
}

export default FeedbackFormComponent;
