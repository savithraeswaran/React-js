import { combineReducers } from 'redux';
const RootReducer = combineReducers({
  counter: counterReducer,
  // other reducers...
});
export default RootReducer;