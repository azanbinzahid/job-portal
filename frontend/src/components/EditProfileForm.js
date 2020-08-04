import React from 'react'
import {connect} from 'react-redux'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';
import { useFormik } from "formik";
import * as yup from 'yup'
import {editUser} from 'redux/actions'

const validationSchema = yup.object().shape({   
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
})

const EditProfileForm = (props) => {
    const { handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: props.userDeatils,
        validationSchema,
        onSubmit(values) {
            props.editUser(values)
        }
    })


    return(
        <Container>
        <Jumbotron>
        <Form onSubmit={handleSubmit}>
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
                Edit Profile
            </Button>
        </Form>
        </Jumbotron>
        </Container>
    )
}


const mapStateToProps = state => ({
    userDeatils: state.userReducer.user
  });

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (userInfo) => dispatch(editUser(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
