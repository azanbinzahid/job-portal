import axios from 'axios'

// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload})
export const logUserOut = () => ({type: "LOG_OUT"})

// Methods

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
        dispatch(setUser(data.user))
    })
    .catch((error)=>{
        console.error(error)
    })
}

export const signUserUp = (userCreds) => dispatch => {
    axios.post(`${process.env.REACT_APP_BASE_URL}/jobs/users/`,userCreds, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
    .then(res => {
        console.log(res)
        let data = res.data
        let user= {
          "username": data.username
        }
        localStorage.setItem("token", data.token)
        dispatch(setUser(user))
    })
    .catch((error)=>{
        console.error(error)
    })
}
