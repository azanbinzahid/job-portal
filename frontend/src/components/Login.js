import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';
import { useFormik } from "formik";
import * as yup from 'yup'
import {fetchUser} from 'redux/actions'

const validationSchema = yup.object().shape({   
    username: yup     
        .string()     
        .max(16)     
        .required(),   
    password: yup    
        .string()    
        .required(),
})

const Login = (props) => {
    const { handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit(values) {
            props.fetchUser(values)
        }
    })


    if (props.isLogged) {
        return <Redirect to="/"/>
    }


    return(
        <Container>
        <Jumbotron align="center">
            <h1> Login Page </h1>
        </Jumbotron>
        <Jumbotron>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={values.username}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.username}
            <Form.Group controlId="formBasicPassword">
                <Form.Control 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
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


const mapStateToProps = state => ({
    isLogged: state.userReducer.loggedIn
  });

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
