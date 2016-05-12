'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from './InputComponent';


class FeedbackFormComponent extends Component {

  render() {
    return(
        <div>
          <Input type="text" name="feedbackName" class="form-control" label="Feedback Name" />
          <Input type="text" name="candidateName" class="form-control" label="Candidate Name" />
          <Input type="text" name="interviewerName" class="form-control" label="Interviewer Name" />
          <Input type="textarea" name="feedbackComments" class="form-control" label="Feedback Comments" />
        </div>
    )
  }
}

export default FeedbackFormComponent;
