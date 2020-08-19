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
                <Item floatingLabel>
                  <Label> Username </Label>
                  <Input
                    placeholder="Username"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlurText={handleBlur('username')}
                  />
                </Item>
                <Text style={StyleSheet.text}>{errors.username}</Text>
                <Item floatingLabel>
                  <Label> Password </Label>
                  <Input
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlurText={handleBlur('password')}
                  />
                </Item>
                <Text style={StyleSheet.text}>{errors.password}</Text>

                <Item floatingLabel>
                  <Label> Email </Label>
                  <Input
                    placeholder="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlurText={handleBlur('email')}
                  />
                </Item>
                <Text style={StyleSheet.text}>{errors.email}</Text>

                <Item floatingLabel>
                  <Label> First Name </Label>
                  <Input
                    placeholder="firstName"
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlurText={handleBlur('firstName')}
                  />
                </Item>
                <Text style={StyleSheet.text}>{errors.firstName}</Text>

                <Item floatingLabel>
                  <Label> Last Name </Label>
                  <Input
                    placeholder="lastName"
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlurText={handleBlur('lastName')}
                  />
                </Item>
                <Text style={StyleSheet.text}>{errors.lastName}</Text>

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
