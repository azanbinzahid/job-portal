import React from 'react'
import {connect} from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { Spinner, Container } from 'react-bootstrap';


const ProtectedRoute = (props) => {
    const {
        component: Component,
        ...rest
      } = props;


    if(!props.loadded){
        return (
            <Container align="center" className="p-5">
            <Spinner animation="border"/>
            </Container>
        )
    }

    return props.isLogged ? (
        <Route {...rest} render={(props) => (
            <Component {...props} />
          )}/>
  
    ) : (
        <>
        <Redirect to={{ 
            pathname: '/login',
        }} />
        </>
    );

}

const mapStateToProps = state => ({
    isLogged: state.userReducer.loggedIn,
    loadded: state.userReducer.loadded,
});

  
export default connect(mapStateToProps)(ProtectedRoute);
