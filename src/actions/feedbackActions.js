import {CREATE_FEEDBACK,FEEDBACK_DETAILS,EDIT_FEEDBACK} from './actionTypes';

export function createFeedback(feedback) {
  return { type: CREATE_FEEDBACK,payload:feedback };
}

export function getFeedbackDetails(id) {
  return { type: FEEDBACK_DETAILS,payload:id };
}

export function editFeedback(feedback) {
  return { type: EDIT_FEEDBACK,payload:feedback };
}
