import uuid from 'uuid'
import axios from 'axios'


export const logUserOut = () => dispatch => {

    dispatch ({type: "LOG_OUT"})
    dispatch (setAlert("Logged out", "warning"))
}


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
        dispatch(setAlert("Login succesful", "success"))

    })
    .catch((error)=>{
        dispatch(setAlert("Error in logging", "danger"))
        console.error(error)
    })
}

export const editUser = (userCreds) => dispatch => {
    axios.put(`${process.env.REACT_APP_BASE_URL}/users/current_user/`, userCreds,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`         
        },
    })
    .then(res => {
        dispatch(autoLogin())
        dispatch(setAlert("User Profile Updated", "success"))

    })
    .catch((error)=>{
        dispatch(setAlert("Error in Update", "danger"))
        console.error(error)
    })
}

export const uploadImage = (userCreds) => dispatch => {
    let formData = new FormData()
    formData.append("image", userCreds.image)
    axios.put(`${process.env.REACT_APP_BASE_URL}/users/upload_picture/`, formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`         
        },
    })
    .then(res => {
        dispatch(autoLogin())
        dispatch(setAlert("Profile Picture Updated", "success"))

    })
    .catch((error)=>{
        dispatch(setAlert("Error in Profile Picture Update", "danger"))
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
        localStorage.setItem("token", data.token)
        dispatch(autoLogin())
        dispatch(setAlert("Signup succesful", "success"))

        
    })
    .catch((error)=>{
        dispatch(setAlert("Error in signup", "danger"))
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
            dispatch({
                type: "SET_USER", 
                payload: data
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

export const applyJob = (jobId, msg, type) => dispatch => {
    axios.patch(`${process.env.REACT_APP_BASE_URL}/jobs/${jobId}/`,{}, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`

        },
    })
    .then(res => {
        dispatch(fetchJob(jobId))
        dispatch(autoLogin())
        dispatch(setAlert(msg, type))

    })
    .catch((error)=>{
        console.log(error)
        dispatch(setAlert("Error Occurred", "danger"))

    })
}



export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: "SET_ALERT",
        payload: {msg, alertType, id}
    })

    setTimeout(()=> dispatch({
        type: "REMOVE_ALERT", payload: id
    }), timeout)
}