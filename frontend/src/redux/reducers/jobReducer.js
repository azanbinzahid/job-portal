const defaultState = {
    jobs: []
}

const jobReducer = (state = defaultState, action) => {
    switch(action.type){
        case "FETCH_JOBS":
            return {
                jobs: [...action.payload]
            }
        default: return state
    }
}

export default jobReducer;
