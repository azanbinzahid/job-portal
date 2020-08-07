import {AlertState, AlertActions} from 'redux/types'


const defaultState: AlertState = {
    alerts: []
}


const alertReducer = (
    state = defaultState, 
    action: AlertActions
    ): AlertState => {
    switch(action.type){
        case "SET_ALERT":
            return {
                ...state,
                alerts: [...state.alerts, action.payload]
            }
        case "REMOVE_ALERT":
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.id !== action.payload) 
            } 
            
        default: 
            return state
    }
}

export default alertReducer;
