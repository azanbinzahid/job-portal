import React, { FC } from "react";
import { connect } from "react-redux";
import { Form, Button, Jumbotron, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { editUser } from "redux/actions";
import { RootState } from "redux/reducers";
import { User } from "redux/types";
import TextField from "./TextField";

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
          <TextField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />

          <Form.Group>
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
          {errors.profile && errors.profile.bio}

          <TextField
            label="Current Location"
            type="text"
            name="profile.location"
            placeholder="Location"
            value={values.profile.location}
            onChange={handleChange}
            error={errors.profile && errors.profile.location}
          />

          <Form.Group>
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
          {errors.profile && errors.profile.education}

          <Form.Label>Experiance</Form.Label>
          <Form.Control<React.ElementType>
            as="textarea"
            rows="3"
            name="profile.experiance"
            placeholder="Experiance"
            value={values.profile.experiance}
            onChange={handleChange}
          />
          {errors.profile && errors.profile.experiance}

          <Form.Group>
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              type="date"
              name="profile.birthDate"
              placeholder="Birth Day"
              value={new Date(values.profile.birthDate).toLocaleDateString()}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.profile && errors.profile.birthDate}

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
