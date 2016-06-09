"use strict";

import initialState from '../initialState.js'
import {BEGIN_AJAX_CALL,AJAX_CALL_ERROR} from '../../actions/actionTypes';

function isSuccessCallback(type){
  return type.includes('_SUCCESS')
}

export default function (state = initialState.ajaxCallsInProgress, action) {
  switch (action.type) {
    case BEGIN_AJAX_CALL:
      return state + 1;
    case isSuccessCallback(action.type) || AJAX_CALL_ERROR:return state - 1;
    default:
    {
      return state;
    }
  }
}
