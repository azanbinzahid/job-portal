import React from 'react'
import {connect} from 'react-redux'
import {signUserUp} from 'redux/actions'
import { Redirect } from 'react-router-dom';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';



class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
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
            <Jumbotron align="center">
                <h1> Signup Page </h1>
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
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Control 
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Control 
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={this.state.last_name}
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
