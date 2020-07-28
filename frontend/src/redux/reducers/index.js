import {combineReducers} from 'redux'
import userReducer from 'redux/reducers/userReducer'

const rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;
