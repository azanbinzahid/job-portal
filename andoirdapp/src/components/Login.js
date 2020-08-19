import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {fetchUser, logUserOut} from '../redux/actions';
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
  password: yup.string().required(),
});

const Login = (props) => {
  const {handleSubmit, handleChange, handleBlur, values, errors} = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit(values) {
      props.fetchUser(values);
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
                <Button
                  bordered
                  style={StyleSheet.button}
                  onPress={handleSubmit}>
                  <Text>Login</Text>
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
    margin: 15,
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
};

const mapStateToProps = (state) => ({
  isLogged: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
