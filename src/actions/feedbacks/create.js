import {CREATE_FEEDBACK} from './../const';

export default function(feedback) {
  return { type: CREATE_FEEDBACK,payload:feedback };
};
