import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'

const ProtectedRoute = (props) => {
    const {
        component: Component,
        ...rest
      } = props;

    //method 1
    const userReducer = useSelector(state => state.userReducer)
    const isAuthenticated = userReducer.loggedIn;

    //method 2
    // const isAuthenticated = localStorage.getItem('token'); // other method

    if(!userReducer.loadded){
        return (<h1>State Loading</h1>)
    }

    return isAuthenticated ? (
        <Route {...rest} render={(props) => (
            <Component {...props} />
          )}/>
  
    ) : (
        <Redirect to={{ 
            pathname: '/login',
        }} />
    );

}

export default ProtectedRoute;