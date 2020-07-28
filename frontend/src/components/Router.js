import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from 'components/Dashboard'
import Login from 'components/Login'
import Signup from 'components/Signup'
import NavBar from 'components/NavBar'


const Router = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}


export default Router;
