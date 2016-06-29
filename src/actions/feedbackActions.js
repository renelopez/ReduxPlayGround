"use strict";

import * as types from './actionTypes';
import * as ajaxActions from './ajaxActions';
import feedbackApi from '../api/mockFeedback';

export function createFeedbackSuccess(createdFeedback) {
  return { type: types.CREATE_FEEDBACK_SUCCESS,payload:createdFeedback };
}

export function createFeedbackFailure(error) {
  return { type: types.CREATE_FEEDBACK_FAILURE,payload:error };
}

export function loadFeedbacksSuccess(feedbacks) {
  return { type: types.LOAD_FEEDBACKS_SUCCESS,payload:feedbacks };
}

export function loadFeedbacksFailure(error) {
  return { type: types.LOAD_FEEDBACKS_FAILURE,payload:error };
}

export function getFeedbackByIdSuccess(feedback) {
  return { type: types.GET_FEEDBACK_BY_ID_SUCCESS,payload:feedback };
}

export function getFeedbackByIdFailure(error) {
  return { type: types.GET_FEEDBACK_BY_ID_FAILURE,payload:error };
}

export function editFeedbackSuccess(feedbackResult) {
  return { type: types.EDIT_FEEDBACK_SUCCESS,payload:feedbackResult };
}

export function editFeedbackFailure(error) {
  return { type: types.EDIT_FEEDBACK_FAILURE,payload:error };
}

export function editFeedback(feedback){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return feedbackApi.editFeedback(feedback).then((feedbackResult)=>{
      dispatch(editFeedbackSuccess(feedbackResult));
    },(error)=>{
      dispatch(editFeedbackFailure(error))
    })
  }
}

export function loadFeedbacks(){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return feedbackApi.getAllFeedbacks().then((feedbacks)=>{
      dispatch(loadFeedbacksSuccess(feedbacks));
    },(error)=>{
      dispatch(loadFeedbacksFailure(error))
    })
  }
}



export function getFeedbackById(feedbackId){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return feedbackApi.getFeedbackById(feedbackId).then((feedback)=>{
      dispatch(getFeedbackByIdSuccess(feedback))
    },(error)=>{
      dispatch(getFeedbackByIdFailure(error))
    })
  }
}

export function createFeedback(feedback){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return feedbackApi.createFeedback(feedback).then((createdFeedback)=>{
      dispatch(createFeedbackSuccess(createdFeedback))
    },(error)=>{
      dispatch(createFeedbackFailure(error))
    })
  }
}
