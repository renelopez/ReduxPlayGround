import {Schema , arrayOf } from 'normalizr';

export const feedback=new Schema('feedbacks');
export const arrayOfFeedbacks=arrayOf(feedback);
