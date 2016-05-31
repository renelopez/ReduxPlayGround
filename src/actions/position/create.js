import {CREATE_POSITION} from './../const';

export default function(position) {
  return { type: CREATE_POSITION,payload:position };
};
