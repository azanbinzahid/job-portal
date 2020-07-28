import React from 'react'
import {connect} from 'react-redux'
import {signUserUp} from 'redux/actions'
import { Redirect } from 'react-router-dom';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';



class Signup extends React.Component {
    state = {
        username: "",
        password: "",
    }

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.signUserUp(this.state)
    }

    render(){


        if (this.props.userReducer.loggedIn) {
            return <Redirect to="/"/>
        }


        return(
            <Container>
            <Jumbotron>
            <h1>Signup Form</h1>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignUp
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
        signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
