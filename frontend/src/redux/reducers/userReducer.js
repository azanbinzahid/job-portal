const defaultState = {
    loggedIn: false,
    user: {
        username: ""
    }
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                loggedIn: true,
                user: {...action.payload}
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                user: {
                    username : ""
                }
            }
        default: return state
    }
}

export default userReducer;
