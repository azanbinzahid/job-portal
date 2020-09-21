import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Button, Jumbotron, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { signUserUp } from "redux/actions";
import { RootState } from "redux/reducers";
import TextField from "../app/common/TextField";
import SectionHeading from "app/common/SectionHeading";

const validationSchema = yup.object().shape({
  username: yup.string().max(16).required(),
  email: yup.string().email().required(),
  firstName: yup.string().max(16).required(),
  lastName: yup.string().max(16).required(),
  password: yup.string().min(8).required(),
});

interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface Props {
  isLogged: boolean;
  signUserUp: (values: User) => void;
}

export const Signup: FC<Props> = (props) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema,
    onSubmit(values) {
      props.signUserUp(values);
    },
  });

  if (props.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <SectionHeading title="SignUp Page" />
      <Container>
        <Jumbotron>
          <Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          >
            <TextField
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              error={errors.username}
            />
            <TextField
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <TextField
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />

            <TextField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />

            <Button variant="primary" type="submit">
              SignUp
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLogged: state.userReducer.loggedIn,
});

const mapDispatchToProps = {
  signUserUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup as any);
