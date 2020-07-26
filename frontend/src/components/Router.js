import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from 'components/Dashboard'
import Login from 'components/Login'
import NavBar from 'components/NavBar'


export default function Router() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
