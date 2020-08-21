import React, { FunctionComponent } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';
import { useFormik } from "formik";
import * as yup from 'yup'
import {fetchUser} from 'redux/actions'
import { RootState } from 'redux/reducers';

const validationSchema = yup.object().shape({   
    username: yup     
        .string()     
        .max(16)     
        .required(),   
    password: yup    
        .string()    
        .required(),
})

interface User {
    username: string,
    password: string,
}
interface Props {
    isLogged: boolean
    fetchUser: (values: User) => void
}

const Login: FunctionComponent<Props> = (props) => {
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
        <Jumbotron <React.ElementType> align="center">
            <h1> Login Page </h1>
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

            <Button variant="primary" type="submit">
                Login
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
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login as any);
