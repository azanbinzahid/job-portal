import React from 'react'
import {connect} from 'react-redux'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from 'yup'
import {editUser} from 'redux/actions'

const validationSchema = Yup.object().shape({   
    email: Yup     
        .string()     
        .email()     
        .required(),
    firstName: Yup     
        .string()     
        .max(16)     
        .required(),   
    lastName: Yup     
        .string()     
        .max(16)     
        .required(), 
        
    profile: Yup.object().shape({  
        bio: Yup     
            .string()     
            .max(500)     
            .required(),   
        location: Yup     
            .string()     
            .max(30)     
            .required(),   
        education: Yup     
            .string()     
            .max(50)     
            .required(),   
        date: Yup     
            .date()     
            .required()   
    })
})

const EditProfileForm = (props) => {
    const { handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: props.userDetails,
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

            <Form.Group controlId="formBasicBio">
                <Form.Control 
                    type="text"
                    name="profile.bio"
                    placeholder="Bio"
                    value={values.profile.bio}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.bio}

            <Form.Group controlId="formBasicLocation">
                <Form.Control 
                    type="text"
                    name="profile.location"
                    placeholder="Location"
                    value={values.profile.location}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.location}

            <Form.Group controlId="formBasicEducation">
                <Form.Control 
                    type="text"
                    name="profile.education"
                    placeholder="Latest Education"
                    value={values.profile.education}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.education}

            <Form.Group controlId="formBasicDate">
                <Form.Control 
                    type="date"
                    name="profile.date"
                    placeholder="Birth Day"
                    value={values.profile.birthDate}
                    onChange={handleChange}
                />
            </Form.Group>
            {errors.date}




            <Button variant="primary" type="submit">
                Update Profile
            </Button>
        </Form>
        </Jumbotron>
        </Container>
    )
}


const mapStateToProps = state => ({
    userDetails: state.userReducer.user
  });

const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (userInfo) => dispatch(editUser(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
