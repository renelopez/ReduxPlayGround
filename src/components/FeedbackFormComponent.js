'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from './InputComponent';


const FeedbackFormComponent = ({feedback, onChange, onSubmit}) => (


  <form onSubmit={onSubmit}>
    <div className="container-fluid">
      <h3>Details for Feedback {feedback.name}</h3>
      <Input label='Name' name="name" type="text" cssClass="form-control" value={feedback.name}
             onChange={onChange}/>
      <Input label='Position' name="position" type="text" cssClass="form-control" value={feedback.position}
             onChange={onChange}/>
      <Input label='Candidate' name="candidate" type="text" cssClass="form-control" value={feedback.candidate}
             onChange={onChange}/>
      <Input label='Reviewer' name="reviewer" type="text" cssClass="form-control" value={feedback.reviewer}
             onChange={onChange}/>
      <Input label='Recruiter' name="recruiter" type="text" cssClass="form-control" value={feedback.recruiter}
             onChange={onChange}/>
      <Input label='Type' name="type" type="text" cssClass="form-control" value={feedback.type}
             onChange={onChange}/>
      <Input label='Customer' name="customer" type="text" cssClass="form-control" value={feedback.customer}
             onChange={onChange}/>
      <Input label='Score' name="score" type="text" cssClass="form-control" value={feedback.score}
             onChange={onChange}/>
      <Input label='Comments' name="comments" type="text" cssClass="form-control" value={feedback.comments}
             onChange={onChange}/>
      <Input label='Creation Date' name="creationDate" type="text" cssClass="form-control"
             value={feedback.creationDate} onChange={onChange}/>
      <input type="submit" className="btn btn-default"/>
    </div>
  </form>
);

export default FeedbackFormComponent;
