import {combineReducers} from 'redux';
import BooksReducer from './reducer-books.js';
import ActiveBookReducer from './reducer-active-book';

const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer
});

export default rootReducer;