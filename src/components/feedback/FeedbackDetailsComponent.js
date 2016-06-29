'use strict';
import React,{PropTypes} from 'react';

const FeedbackDetails = ({ details }) => (
    <div className="container-fluid">
      <h3>Details for Feedback {details.name}</h3>
      <div className="form-group">
        <label className="col-md-2 control-label ">Id</label>
        <div className="col-md-10">
          <p>{details.id}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Position</label>
        <div className="col-md-10">
          <p>{details.position}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Recruiter</label>
        <div className="col-md-10">
          <p>{details.recruiter}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Candidate</label>
        <div className="col-md-10">
          <p>{details.candidate}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Reviewer</label>
        <div className="col-md-10">
          <p>{details.reviewer}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Type</label>
        <div className="col-md-10">
          <p>{details.type}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Customer</label>
        <div className="col-md-10">
          <p>{details.customer}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Score</label>
        <div className="col-md-10">
          <p>{details.score}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Comments</label>
        <div className="col-md-10">
          <p>{details.comments}</p>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label ">Creation Date</label>
        <div className="col-md-10">
          <p>{details.creationDate}</p>
        </div>
      </div>
    </div>
);

FeedbackDetails.propTypes={
  details:PropTypes.object.isRequired
};

export default FeedbackDetails;



