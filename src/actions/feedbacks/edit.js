import {EDIT_FEEDBACK} from './../const';

export default function(feedback) {
  return { type: EDIT_FEEDBACK,payload:feedback };
};
