import {combineReducers} from 'redux'
import userReducer from 'redux/reducers/userReducer'
import alertReducer from 'redux/reducers/alertReducer'
import jobReducer from 'redux/reducers/jobReducer'

const rootReducer = combineReducers({
    userReducer,
    jobReducer,
    alertReducer,
})

export default rootReducer;
