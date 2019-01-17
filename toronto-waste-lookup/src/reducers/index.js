import { combineReducers } from 'redux';
import allItemsReducer from './allItemsReducer';

const rootReducer = combineReducers({
  allItems: allItemsReducer
});

export default rootReducer;