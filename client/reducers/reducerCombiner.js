import { combineReducers } from 'redux';

// import all reducers here
import projectReducer from './projectReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  projectR: projectReducer,
});

// make the combined reducers available for import
export default reducers;

