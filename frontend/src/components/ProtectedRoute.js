import React from 'react'
import {connect} from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {setAlert} from 'redux/actions'
import { Spinner, Container } from 'react-bootstrap';


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
        return (
            <Container align="center" className="p-5">
            <Spinner animation="border"/>
            </Container>
        )
    }

    return isAuthenticated ? (
        <Route {...rest} render={(props) => (
            <Component {...props} />
          )}/>
  
    ) : (
        <>
        {/* {props.setAlert("Please login first", "danger")} */}
        <Redirect to={{ 
            pathname: '/login',
        }} />
        </>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        setAlert: (msg, type) => dispatch(setAlert(msg, type)),
       
    }
  }
  
export default connect(null, mapDispatchToProps)(ProtectedRoute);
