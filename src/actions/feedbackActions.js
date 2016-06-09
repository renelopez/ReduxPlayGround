"use strict";

import * as types from './actionTypes';
import feedbackApi from '../api/mockFeedback';

export function createFeedback(feedback) {
  return { type: types.CREATE_FEEDBACK,payload:feedback };
}

export function loadFeedbacksSuccess(feedbacks) {
  return { type: types.LOAD_FEEDBACKS_SUCCESS,payload:feedbacks };
}

export function getFeedbackByIdSuccess(feedback) {
  return { type: types.GET_FEEDBACK_BY_ID_SUCCESS,payload:feedback };
}

export function editFeedbackSuccess(feedbackResult) {
  return { type: types.EDIT_FEEDBACK_SUCCESS,payload:feedbackResult };
}

export function editFeedback(feedback){
  return function(dispatch){
    return feedbackApi.editFeedback(feedback).then((feedbackResult)=>{
      dispatch(editFeedbackSuccess(feedbackResult));
    }).catch((error)=>{
      throw error;
    });
  }
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
