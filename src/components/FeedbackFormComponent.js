'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from './InputComponent';


class FeedbackFormComponent extends Component {

  state={
    name:'',
    position:'',
    recruiter:'',
    reviewer:'',
    score:"",
    creationDate:null
  };

  onChange = (name,value) => {
      let currentState=this.state;
      currentState[name]=value;
      this.setState(currentState);
  };

  onSubmit=(event) =>{
    event.preventDefault();
    this.setState({creationDate:new Date().toLocaleDateString()});
    this.props.onSubmit(this.state);
  };

  render() {
    return(
        <div className="container-fluid col-md-6">
          <form onSubmit={this.onSubmit}>
            <Input type="text" name="name" cssClass="form-control" label="Name" onChange={this.onChange} />
            <Input type="text" name="candidate" cssClass="form-control" label="Candidate" onChange={this.onChange} />
            <Input type="text" name="customer" cssClass="form-control" label="Customer" onChange={this.onChange} />
            <Input type="text" name="type" cssClass="form-control" label="Type" onChange={this.onChange} />
            <Input type="text" name="position" cssClass="form-control" label="Position" onChange={this.onChange} />
            <Input type="text" name="recruiter" cssClass="form-control" label="Recruiter" onChange={this.onChange} />
            <Input type="text" name="reviewer" cssClass="form-control" label="Reviewer" onChange={this.onChange} />
            <Input type="text" name="score" cssClass="form-control" label="Score" onChange={this.onChange} />
            <input type="submit" className="btn btn-default" />
          </form>
        </div>
    )
  }
}

export default FeedbackFormComponent;
