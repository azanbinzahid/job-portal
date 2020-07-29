const defaultState = {
    loadded: false,
    loggedIn: false,
    user: {
        username: ""
    }
}

const userReducer = (state = defaultState, action) => {
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
                user: {
                    username : ""
                }
            }
        case "AUTO_LOGIN":
            return {
                loadded: true,
            }
        default: return state
    }
}

export default userReducer;
