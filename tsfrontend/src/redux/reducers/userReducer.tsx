import { UserState, UserActions } from 'redux/types'


const defaultState: UserState = {
    loadded: false,
    loggedIn: false,
    user: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        jobsApplied: [],
        profile: null,
    
    }
}

const userReducer = (
    state = defaultState, 
    action: UserActions
    ): UserState => {
    switch(action.type){
        case "SET_USER":
            return {
                loadded: true,
                loggedIn: true,
                user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loadded: true,
                loggedIn: false,
                user: defaultState.user,
            }
        case "AUTO_LOGIN":
            return {
                ...state,
                loadded: true,
            }
        default: return state
    }
}

export default userReducer;
