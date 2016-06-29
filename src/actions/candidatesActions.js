import * as types from './actionTypes';
import * as ajaxActions from './ajaxActions';
import feedbackApi from '../api/mockFeedback';

export function loadCandidatesSuccess(candidates) {
  return { type: types.LOAD_CANDIDATES_SUCCESS,payload:candidates }
}

export function loadCandidatesFailure(error) {
  return { type: types.LOAD_CANDIDATES_FAILURE,payload:error }
}

export function loadCandidates(){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return feedbackApi.getAllCandidates().then((candidates)=>{
      dispatch(loadCandidatesSuccess(candidates));
    },(error)=>{
      dispatch(loadCandidatesFailure(error))
    })
  }
}


