import {combineReducers} from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import jobReducer from './jobReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  userReducer,
  jobReducer,
  alertReducer,
  themeReducer,
});

export default rootReducer;
