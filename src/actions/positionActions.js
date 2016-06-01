import {CREATE_POSITION} from './actionTypes';

export function createPosition(position) {
  return { type: CREATE_POSITION,payload:position };
};
