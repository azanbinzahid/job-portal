import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';
import { useFormik } from "formik";
import * as yup from 'yup'
import {signUserUp} from 'redux/actions'
import { RootState } from 'redux/reducers';

const validationSchema = yup.object().shape({   
    username: yup     
        .string()     
        .max(16)     
        .required(),   
    email: yup     
        .string()     
        .email()     
        .required(),
    firstName: yup     
        .string()     
        .max(16)     
        .required(),   
    lastName: yup     
        .string()     
        .max(16)     
        .required(),   
    password: yup    
        .string()    
        .min(8)    
        .required(),
})


interface User {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
}
interface Props {
    isLogged: boolean
    signUserUp: (values: User) => void
}

const Signup = (props: Props) => {
    const { handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
        },
        validationSchema,
        onSubmit(values) {
            props.signUserUp(values)
        }
    })


    if (props.isLogged) {
        return <Redirect to="/"/>
    }


    return(
        <Container>
        <Jumbotron <React.ElementType> align="center">
            <h1> Signup Page </h1>
        </Jumbotron>
        <Jumbotron>
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>handleSubmit(e)}>
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
            {errors.password}
            <Form.Group controlId="formBasicEmail">
                <Form.Control 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors.email}
            <Form.Group controlId="formBasicFirstName">
                <Form.Control 
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.firstName}

            <Form.Group controlId="formBasicLastName">
                <Form.Control 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.lastName}


            <Button variant="primary" type="submit">
                SignUp
            </Button>
        </Form>
        </Jumbotron>
        </Container>
    )
}


const mapStateToProps = (state: RootState) => ({
    isLogged: state.userReducer.loggedIn
  });


const mapDispatchToProps = {
    signUserUp
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup as any);
