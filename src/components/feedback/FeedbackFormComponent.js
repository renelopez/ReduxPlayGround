'use strict';
import  React, {Component, PropTypes} from 'react';
import Input from '../common/InputComponent';
import Select from '../common/SelectComponent';


const FeedbackFormComponent = ({data, onChange, onSubmit,isLoading,options}) => (


  <form onSubmit={onSubmit}>
    <div className="container-fluid">
      <h3>Details for Feedback {data.name}</h3>
      <Input label='Name' name="name" type="text" cssClass="form-control" value={data.name}
             onChange={onChange}/>
      <Input label='Position' name="position" type="text" cssClass="form-control" value={data.position}
             onChange={onChange}/>
      <Select label='Candidate' name="candidate" type="text" options={options} defaultOption={"Please select a candidate"}
             onChange={onChange}/>
      <Input label='Reviewer' name="reviewer" type="text" cssClass="form-control" value={data.reviewer}
             onChange={onChange}/>
      <Input label='Recruiter' name="recruiter" type="text" cssClass="form-control" value={data.recruiter}
             onChange={onChange}/>
      <Input label='Type' name="type" type="text" cssClass="form-control" value={data.type}
             onChange={onChange}/>
      <Input label='Customer' name="customer" type="text" cssClass="form-control" value={data.customer}
             onChange={onChange}/>
      <Input label='Score' name="score" type="text" cssClass="form-control" value={data.score}
             onChange={onChange}/>
      <Input label='Comments' name="comments" type="text" cssClass="form-control" value={data.comments}
             onChange={onChange}/>
      <input type="submit"
             className="btn btn-default"
             value={isLoading ?'Saving...':'Save'}
             disabled={isLoading} />
    </div>
  </form>//
);

export default FeedbackFormComponent;
