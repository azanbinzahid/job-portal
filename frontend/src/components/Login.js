import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from 'redux/actions'
import { Redirect } from 'react-router-dom';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    };


    onSubmit = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state)
    }


    render(){

        
        if (this.props.userReducer.loggedIn) {
            return <Redirect to="/"/>
        }



        return(
            <Container>
            <Jumbotron align="center">
                <h1> Login Page </h1>
            </Jumbotron>
            <Jumbotron>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            </Jumbotron>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer
  });

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
