"use strict";

import {CREATE_FEEDBACK,FEEDBACK_DETAILS,EDIT_FEEDBACK,LOAD_FEEDBACKS_SUCCESS,GET_FEEDBACK_BY_ID_SUCCESS} from './actionTypes';
import feedbackApi from '../api/mockFeedback';

export function createFeedback(feedback) {
  return { type: CREATE_FEEDBACK,payload:feedback };
}

export function getFeedbackDetails(id) {
  return { type: FEEDBACK_DETAILS,payload:id };
}

export function editFeedback(feedback) {
  return { type: EDIT_FEEDBACK,payload:feedback };
}

export function loadFeedbacksSuccess(feedbacks) {
  return { type: LOAD_FEEDBACKS_SUCCESS,payload:feedbacks };
}

export function getFeedbackByIdSuccess(feedback) {
  return { type: GET_FEEDBACK_BY_ID_SUCCESS,payload:feedback };
}

export function loadFeedbacks(){
  return function(dispatch){
    return feedbackApi.getAllFeedbacks().then((feedbacks)=>{
      dispatch(loadFeedbacksSuccess(feedbacks));
    }).catch((error)=>{
      throw error;
    });
  }
}

export function getFeedbackById(feedbackId){
  return function(dispatch){
    return feedbackApi.getFeedbackById(feedbackId).then((feedback)=>{
      dispatch(getFeedbackByIdSuccess(feedback))
    }).catch((error)=>{
      throw error;
    });
  }
}
