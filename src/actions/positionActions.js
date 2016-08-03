import * as types from './actionTypes';
import * as ajaxActions from './ajaxActions';
import positionApi from '../api/mockPosition';


export function loadPositionsSuccess(position) {
  return { type: types.LOAD_POSITIONS_SUCCESS,payload:position };
}

export function loadPositionsFailure(error) {
  return { type: types.LOAD_POSITIONS_FAILURE,payload:error };
}

export function getPositionByIdSuccess(position) {
  return { type: types.GET_POSITION_BY_ID_SUCCESS,payload:position };
}

export function getPositionByIdFailure(error) {
  return { type: types.GET_POSITION_BY_ID_FAILURE,payload:error };
}

export function loadPositions(){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return positionApi.getAllPositions().then((positions)=>{
      dispatch(loadPositionsSuccess(positions));
    },(error)=>{
      dispatch(loadPositionsFailure(error))
    })
  }
}

export function getPositionById(id){
  ajaxActions.beginAjaxCall();
  return function(dispatch){
    return positionApi.getPositionById(id).then((position)=>{
      dispatch(getPositionByIdSuccess(position));
    },(error)=>{
      dispatch(getPositionByIdFailure(error))
    })
  }
}


