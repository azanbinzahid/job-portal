import React, { FC } from "react";
import { connect } from "react-redux";
import { Form, Button, Jumbotron, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editUser } from "redux/actions";
import { RootState } from "redux/reducers";
import { User } from "redux/types";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  firstName: Yup.string().max(16).required(),
  lastName: Yup.string().max(16).required(),

  // validation errors, need to fix
  profile: Yup.object().shape({
    bio: Yup.string().max(500).required(),
    location: Yup.string().max(30).required(),
    education: Yup.string().max(300).required(),
    experiance: Yup.string().max(300).required(),

    birthDate: Yup.date().required(),
  }),
});

type Props = {
  userDetails: User;
  editUser: (values: User) => void;
};
const EditProfileForm: FC<Props> = (props) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: props.userDetails,
    validationSchema,
    onSubmit(values) {
      props.editUser(values);
    },
  });

  return (
    <Container>
      <Jumbotron>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
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
            <Form.Label>First Name</Form.Label>
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
            <Form.Label>Last Name</Form.Label>
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
            <Form.Label>Bio</Form.Label>
            <Form.Control<React.ElementType>
              as="textarea"
              rows="3"
              name="profile.bio"
              placeholder="Bio"
              value={values.profile.bio}
              onChange={handleChange}
            />
          </Form.Group>
          {/* {errors.bio} */}

          <Form.Group controlId="formBasicLocation">
            <Form.Label>Current Location</Form.Label>
            <Form.Control
              type="text"
              name="profile.location"
              placeholder="Location"
              value={values.profile.location}
              onChange={handleChange}
            />
          </Form.Group>
          {/* {errors.location} */}

          <Form.Group controlId="formBasicEducation">
            <Form.Label>Education</Form.Label>
            <Form.Control<React.ElementType>
              as="textarea"
              rows="3"
              name="profile.education"
              placeholder="Education"
              value={values.profile.education}
              onChange={handleChange}
            />
          </Form.Group>
          {/* {errors.education} */}

          <Form.Group controlId="formBasicEducation">
            <Form.Label>Experiance</Form.Label>
            <Form.Control<React.ElementType>
              as="textarea"
              rows="3"
              name="profile.experiance"
              placeholder="Experiance"
              value={values.profile.experiance}
              onChange={handleChange}
            />
          </Form.Group>
          {/* {errors.experiance} */}

          <Form.Group controlId="formBasicDate">
            <Form.Label>Birthdate</Form.Label>

            <Form.Control
              type="date"
              name="profile.date"
              placeholder="Birth Day"
              value={new Date(values.profile.birthDate).toLocaleDateString()}
              onChange={handleChange}
            />
          </Form.Group>
          {/* {errors.date} */}

          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  userDetails: state.userReducer.user,
});

const mapDispatchToProps = {
  editUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm as any);
