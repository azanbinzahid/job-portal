import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'components/Home'
import Login from 'components/Login'
import Signup from 'components/Signup'
import NavBar from 'components/NavBar'
import JobList from 'components/JobList'
import SingleJob from 'components/SingleJob'


const Router = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/jobs/:jobId" component={SingleJob} />
                <Route path="/jobs" component={JobList} />
            </Switch>
        </BrowserRouter>
    )
}


export default Router;
