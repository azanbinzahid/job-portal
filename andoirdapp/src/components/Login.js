import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {fetchUser} from '../redux/actions';
import {View, TextInput, Button, Text} from 'react-native';

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
    // validationSchema,
    onSubmit(values) {
      console.log(values);
      props.fetchUser(values);
    },
  });

  // if (props.isLogged) {
  // }

  return (
    <View>
      <Text>Login Page</Text>
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
        <Button onPress={handleSubmit} title="Login" />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.userReducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
