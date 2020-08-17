import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {signUserUp, logUserOut} from '../redux/actions';
import {View, TextInput, Button, Text} from 'react-native';

const validationSchema = yup.object().shape({
  username: yup.string().max(16).required(),
  password: yup.string().required(),
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
    // validationSchema,
    onSubmit(values) {
      props.signUserUp(values);
    },
  });

  if (props.isLogged) {
    return (
      <View>
        <Text>You are Logged In</Text>
        <Button
          title="Go to Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button title="Log Out" onPress={() => props.logUserOut()} />
      </View>
    );
  }

  return (
    <View>
      <Text>Sign Up Page</Text>
      <View>
        <TextInput
          placeholder="Username"
          value={values.username}
          onChangeText={handleChange('username')}
          onBlurText={handleBlur('username')}
        />
        {/* {errors.username} */}
        <TextInput
          placeholder="Password"
          value={values.password}
          onChangeText={handleChange('password')}
          onBlurText={handleBlur('password')}
        />
        {/* {errors.password} */}

        <TextInput
          placeholder="email"
          value={values.email}
          onChangeText={handleChange('email')}
          onBlurText={handleBlur('email')}
        />
        {/* {errors.email} */}

        <TextInput
          placeholder="firstName"
          value={values.firstName}
          onChangeText={handleChange('firstName')}
          onBlurText={handleBlur('firstName')}
        />
        {/* {errors.firstName} */}

        <TextInput
          placeholder="lastName"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
          onBlurText={handleBlur('lastName')}
        />
        {/* {errors.lastName} */}

        <Button onPress={handleSubmit} title="Sign Up" />
      </View>
    </View>
  );
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
