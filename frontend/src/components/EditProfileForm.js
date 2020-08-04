import React from 'react'
import {connect} from 'react-redux'
import {editUser} from 'redux/actions'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap';

class EditProfileForm extends React.Component {
    state = this.props.userReducer.user

    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    };


    onSubmit = (e) => {
        e.preventDefault()
        this.props.editUser(this.state)
    }


    render(){

        
        return(
            <Container>
            <Jumbotron>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Edit Profile
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
        editUser: (userInfo) => dispatch(editUser(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
