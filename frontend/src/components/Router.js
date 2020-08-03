import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {autoLogin, fetchJobs} from 'redux/actions'
import Home from 'components/Home'
import Login from 'components/Login'
import Signup from 'components/Signup'
import NavBar from 'components/NavBar'
import JobList from 'components/JobList'
import SingleJob from 'components/SingleJob'
import ProtectedRoute from 'components/ProtectedRoute'



const Router = (props) => {

    useEffect(() => {
        props.autoLogin()
        props.fetchJobs()
    }, [props])
    
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <ProtectedRoute path="/jobs/:jobId" component={SingleJob} />
                <ProtectedRoute path="/jobs" component={JobList} />
                <Route component={Home} />

            </Switch>
        </BrowserRouter>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        autoLogin: () => dispatch(autoLogin()),
        fetchJobs: () => dispatch(fetchJobs()),
       
    }
  }
  
export default connect(null, mapDispatchToProps)(Router);
