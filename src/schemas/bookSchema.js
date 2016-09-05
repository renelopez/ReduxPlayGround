import {Schema,arrayOf} from 'normalizr'

export const books=new Schema('books');
export const arrayOfBooks=arrayOf(books);
