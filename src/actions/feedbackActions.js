"use strict";

import * as types from './actionTypes';
import feedbackApi from '../api/mockFeedback';

export function createFeedback(feedback) {
  return { type: types.CREATE_FEEDBACK,payload:feedback };
}

export function getFeedbackDetails(id) {
  return { type: types.FEEDBACK_DETAILS,payload:id };
}

export function editFeedback(feedback) {
  return { type: types.EDIT_FEEDBACK,payload:feedback };
}

export function loadFeedbacksSuccess(feedbacks) {
  return { type: types.LOAD_FEEDBACKS_SUCCESS,payload:feedbacks };
}

export function getFeedbackByIdSuccess(feedback) {
  return { type: types.GET_FEEDBACK_BY_ID_SUCCESS,payload:feedback };
}

export function editFeedbackSuccess(feedback) {
  return { type: types.EDIT_FEEDBACK_SUCCESS,payload:feedback };
}

export function editFeedback(feedback){
  return function(dispatch){
    return feedbackApi.editFeedback(feedback).then((feedback)=>{
      dispatch(editFeedbackSuccess(feedback));
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
