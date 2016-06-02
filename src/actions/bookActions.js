'use strict';

import {SELECT_BOOK} from './actionTypes';

export function selectBook(book) {
  return { type: SELECT_BOOK,payload:book };
}


