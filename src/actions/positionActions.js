import * as types from './actionTypes';
import * as ajaxActions from './ajaxActions';
import feedbackApi from '../api/mockFeedback';

export function loadPositionsSuccess(position) {
  return { type: types.LOAD_POSITIONS_SUCCESS,payload:position };
}

export function loadPositions(){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return feedbackApi.getAllPositions().then((positions)=>{
      dispatch(loadPositionsSuccess(positions));
    }).catch((error)=>{
      throw error;
    });
  }
}
