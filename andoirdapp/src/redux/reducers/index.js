import {combineReducers} from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import jobReducer from './jobReducer';

const rootReducer = combineReducers({
  userReducer,
  jobReducer,
  alertReducer,
});

export default rootReducer;
