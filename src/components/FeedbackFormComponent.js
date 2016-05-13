'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from './InputComponent';


class FeedbackFormComponent extends Component {

  state={
    feedbackName:'',
    candidateName:'',
    interviewerName:'',
    feedbackComments:''
  };
  
  onChange = (name,value) => {
      
  };

  render() {
    return(
        <div className="col-md-6">
          <form>
            <Input type="text" name="feedbackName" cssClass="form-control" label="Feedback Name" onChange={this.onChange} />
            <Input type="text" name="candidateName" cssClass="form-control" label="Candidate Name" onChange={this.onChange} />
            <Input type="text" name="interviewerName" cssClass="form-control" label="Interviewer Name" onChange={this.onChange} />
            <Input type="text" name="feedbackComments" cssClass="form-control" label="Feedback Comments" onChange={this.onChange} />
            <button className="btn btn-default">Submit</button>
          </form>
        </div>
    )
  }
}

export default FeedbackFormComponent;
