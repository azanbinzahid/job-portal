import axios from 'axios'


export const logUserOut = () => ({type: "LOG_OUT"})

export const fetchUser = (userCreds) => dispatch => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/token-auth/`, userCreds,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            
        },
    })
    .then(res => {
        let data = res.data
        localStorage.setItem("token", data.token)
        dispatch({
            type: "SET_USER", 
            payload: data.user
        })
    })
    .catch((error)=>{
        console.error(error)
    })
}

export const signUserUp = (userCreds) => dispatch => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/`,userCreds, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
    .then(res => {
        let data = res.data
        let user= {
          "username": data.username
        }
        localStorage.setItem("token", data.token)
        dispatch({ 
            type: "SET_USER", 
            payload: user
        })
    })
    .catch((error)=>{
        console.error(error)
    })
}

export const autoLogin = () => dispatch => {
    if (localStorage.getItem("token")) {
        axios(`${process.env.REACT_APP_BASE_URL}/users/current_user/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `JWT ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            let data = res.data
            let user= {
                "username": data.username
            }
            dispatch({
                type: "SET_USER", 
                payload: user
            })
        })
        .catch((error)=>{
            dispatch(
                {
                    type: "AUTO_LOGIN"
                }
            )
            console.log(error)
        })
    } else {
        dispatch(
            {
                type: "AUTO_LOGIN"
            }
        )
    }
}


export const fetchJobs = () => dispatch => {
        axios(`${process.env.REACT_APP_BASE_URL}/jobs/`)
        .then(res => {
            let jobs = res.data
            dispatch({
                type: "FETCH_JOBS", 
                payload: jobs
            })
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const fetchJob = (jobId) => dispatch => {
    axios(`${process.env.REACT_APP_BASE_URL}/jobs/${jobId}/`)
    .then(res => {
        let job = res.data
        dispatch({
            type: "FETCH_JOB", 
            payload: job
        })
    })
    .catch((error)=>{
        console.log(error)
    })
}
