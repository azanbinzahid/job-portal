import uuid from 'uuid'
import axios, {AxiosResponse, AxiosError} from 'axios'
import {Dispatch} from 'redux'
import {
UserActionTypes,    
JobActionTypes,    
AlertActionTypes,
LogOutUserAction,
SetAlertAction,    
RemoveAlertAction,
FetchJobAction,
FetchJobsAction,
User,
AutoLoginUserAction,
SetUserAction
} from 'redux/types'

export const logUserOut = () => (dispatch: Dispatch<LogOutUserAction> | any) => {
    dispatch ({type: UserActionTypes.LOG_OUT})
    dispatch (setAlert("Logged out", "warning"))
}


export const fetchUser = (userCreds: User) => (dispatch: any) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/token-auth/`, userCreds,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            
        },
    })
    .then((res: AxiosResponse) => {
        let data = res.data
        localStorage.setItem("token", data.token)
        dispatch({
            type: UserActionTypes.SET_USER, 
            payload: data.user
        })
        dispatch(setAlert("Login succesful", "success"))

    })
    .catch((error: AxiosError)=>{
        dispatch(setAlert("Error in logging", "danger"))
        console.error(error)
    })
}

export const editUser = (userCreds: User) => (dispatch: any) => {
    axios.put(`${process.env.REACT_APP_BASE_URL}/users/current_user/`, userCreds,{
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`         
        },
    })
    .then(() => {
        dispatch(autoLogin())
        dispatch(setAlert("User Profile Updated", "success"))

    })
    .catch((error: AxiosError)=>{
        dispatch(setAlert("Error in Update", "danger"))
        console.error(error)
    })
}

export const uploadImage = (userCreds: {
    image: string
}) => (dispatch: any) => {
    let formData = new FormData()
    formData.append("image", userCreds.image)
    axios.put(`${process.env.REACT_APP_BASE_URL}/users/upload_picture/`, formData,{
        headers: {
            "Content-Type": "multipart/form-data",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`         
        },
    })
    .then(() => {
        dispatch(autoLogin())
        dispatch(setAlert("Profile Picture Updated", "success"))

    })
    .catch((error: AxiosError)=>{
        dispatch(setAlert("Error in Profile Picture Update", "danger"))
        console.error(error)
    })
}





export const signUserUp = (userCreds: User) => (dispatch: any) => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/users/`,userCreds, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
    .then((res: AxiosResponse) => {
        let data = res.data
        localStorage.setItem("token", data.token)
        dispatch(autoLogin())
        dispatch(setAlert("Signup succesful", "success"))

        
    })
    .catch((error: AxiosError)=>{
        dispatch(setAlert("Error in signup", "danger"))
        console.error(error)
    })
}

export const autoLogin = () => (dispatch: Dispatch <AutoLoginUserAction | SetUserAction>) => {
    if (localStorage.getItem("token")) {
        axios(`${process.env.REACT_APP_BASE_URL}/users/current_user/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `JWT ${localStorage.getItem("token")}`
            }
        })
        .then((res: AxiosResponse) => {
            let data = res.data
            dispatch({
                type: UserActionTypes.SET_USER, 
                payload: data
            })

        })
        .catch((error: AxiosError)=>{
            dispatch(
                {
                    type: UserActionTypes.AUTO_LOGIN
                }
            )
            console.log(error)
        })
    } else {
        dispatch(
            {
                type: UserActionTypes.AUTO_LOGIN
            }
        )
    }
}


export const fetchJobs = () => (dispatch: Dispatch<FetchJobsAction>) => {
        axios(`${process.env.REACT_APP_BASE_URL}/jobs/`)
        .then((res: AxiosResponse) => {
            let jobs = res.data
            dispatch({
                type: JobActionTypes.FETCH_JOBS, 
                payload: jobs
            })
        })
        .catch((error: AxiosError)=>{
            console.log(error)
        })
}

export const fetchJob = (jobId: number) => (dispatch: Dispatch<FetchJobAction>) => {
    console.log("job action", jobId)
    axios(`${process.env.REACT_APP_BASE_URL}/jobs/${jobId}/`)
    .then((res: AxiosResponse) => {
        let job = res.data
        dispatch({
            type: JobActionTypes.FETCH_JOB, 
            payload: job
        })
    })
    .catch((error: AxiosError)=>{
        console.log(error)
    })
}

export const applyJob = (jobId: number, msg: string, type: string) => (dispatch: any) => {
    axios.patch(`${process.env.REACT_APP_BASE_URL}/jobs/${jobId}/`,{}, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `JWT ${localStorage.getItem("token")}`

        },
    })
    .then(()=> {
        dispatch(fetchJob(jobId))
        dispatch(autoLogin())
        dispatch(setAlert(msg, type))

    })
    .catch((error: AxiosError)=>{
        console.log(error)
        dispatch(setAlert("Error Occurred", "danger"))

    })
}




export const setAlert = (msg:string, alertType:string, timeout = 3000) => (dispatch: Dispatch<SetAlertAction|RemoveAlertAction>) => {
    const id = uuid.v4();
    dispatch({
        type: AlertActionTypes.SET_ALERT,
        payload: {msg, alertType, id}
    })

    setTimeout(()=> dispatch({
        type: AlertActionTypes.REMOVE_ALERT, 
        payload: id
    }), timeout)
}