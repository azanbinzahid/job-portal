import {combineReducers} from 'redux'
import userReducer from 'redux/reducers/userReducer'
import jobReducer from 'redux/reducers/jobReducer'

const rootReducer = combineReducers({
    userReducer,
    jobReducer,
})

export default rootReducer;
