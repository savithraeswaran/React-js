import { createStore } from 'redux';
import RootReducer from './Reducer'; // Assuming your rootReducer is in a file called reducers.js

const Store = createStore(RootReducer);

export default Store;