import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {signUserUp, logUserOut} from '../redux/actions';
import {
  Button,
  Container,
  Text,
  Content,
  Grid,
  Col,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';
import MyHeader from './MyHeader';
import TextInput from './TextInput';

const validationSchema = yup.object().shape({
  username: yup.string().max(16).required(),
  password: yup.string().min(8).required(),
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const Login = (props) => {
  const {handleSubmit, handleChange, handleBlur, values, errors} = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit(values) {
      props.signUserUp(values);
    },
  });
  return (
    <Container>
      <MyHeader {...props} />
      <Content contentContainerStyle={StyleSheet.content} padder>
        <Grid style={StyleSheet.grid}>
          <Col>
            {props.isLogged ? (
              <>
                <Text style={StyleSheet.text}>
                  Are you sure you want to logout?
                </Text>
                <Button
                  bordered
                  style={StyleSheet.button}
                  title="Log Out"
                  onPress={() => props.logUserOut()}>
                  <Text>Yes, Logout</Text>
                </Button>
              </>
            ) : (
              <Form>
                <TextInput
                  name="username"
                  label="Username"
                  value={values.username}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.username}
                />

                <TextInput
                  name="password"
                  label="Password"
                  value={values.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.password}
                />

                <TextInput
                  name="email"
                  label="Email"
                  value={values.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.email}
                />

                <TextInput
                  name="firstName"
                  label="First Name"
                  value={values.firstName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.firstName}
                />

                <TextInput
                  name="lastName"
                  label="Last Name"
                  value={values.lastName}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.lastName}
                />

                <Button
                  bordered
                  style={StyleSheet.button}
                  onPress={handleSubmit}>
                  <Text>Sign Up</Text>
                </Button>
              </Form>
            )}
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

const StyleSheet = {
  button: {
    alignSelf: 'center',
    margin: 15,
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  content: {},
};

const mapStateToProps = (state) => ({
  isLogged: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo)),
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
