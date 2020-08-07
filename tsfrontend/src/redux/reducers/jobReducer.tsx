import {JobState, JobActions} from 'redux/types'


const defaultState: JobState = {
    jobs: [],
    job: null
}

const jobReducer = (
    state = defaultState, 
    action: JobActions
    ):JobState => {
    switch(action.type){
        case "FETCH_JOBS":
            return {
                ...state,
                jobs: [...action.payload],
            }
        case "FETCH_JOB":
            return {
                ...state,
                job: {...action.payload} 
            }
    
        default: return state
    }
}

export default jobReducer;
