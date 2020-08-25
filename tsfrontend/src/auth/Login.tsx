import React, { FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Form, Button, Jumbotron, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { fetchUser } from "redux/actions";
import { RootState } from "redux/reducers";
import TextField from "app/common/TextField";
import PageHeader from "app/common/PageHeader";

const validationSchema = yup.object().shape({
  username: yup.string().max(16).required(),
  password: yup.string().required(),
});

interface User {
  username: string;
  password: string;
}
interface Props {
  isLogged: boolean;
  fetchUser: (values: User) => void;
}

const Login: FC<Props> = (props) => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit(values) {
      props.fetchUser(values);
    },
  });

  if (props.isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <PageHeader title="Login Page" />
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
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLogged: state.userReducer.loggedIn,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login as any);
