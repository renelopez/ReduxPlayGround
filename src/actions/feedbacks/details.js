import {FEEDBACK_DETAILS} from './../const';

export default function(id) {
  return { type: FEEDBACK_DETAILS,payload:id };
};
