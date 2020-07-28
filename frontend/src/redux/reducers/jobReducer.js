const defaultState = {
    jobs: [],
    job: {}
}

const jobReducer = (state = defaultState, action) => {
    switch(action.type){
        case "FETCH_JOBS":
            return {
                jobs: [...action.payload],
                job: state.job
            }
        case "FETCH_JOB":
            return {
                jobs: state.jobs,
                job: {...action.payload} 
            }
    
        default: return state
    }
}

export default jobReducer;
