import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {editUser} from '../redux/actions';
import {Form, Input, Item, Text, Button, Label, Textarea} from 'native-base';
import TextInput from './TextInput';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  firstName: Yup.string().max(16).required(),
  lastName: Yup.string().max(16).required(),
  profile: Yup.object().shape({
    bio: Yup.string().max(500).required(),
    location: Yup.string().max(30).required(),
    education: Yup.string().max(300).required(),
    experiance: Yup.string().max(300).required(),
    // birthDate: Yup.date().required(),
  }),
});

const EditProfileForm = (props) => {
  const {handleSubmit, handleChange, handleBlur, values, errors} = useFormik({
    initialValues: props.userDetails,
    validationSchema,
    onSubmit(values) {
      props.editUser(values);
    },
  });

  return (
    <Form>
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

      <TextInput
        multiline={true}
        name="profile.bio"
        label="Bio"
        value={values.profile.bio}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.profile && errors.profile.bio}
      />

      <TextInput
        name="profile.location"
        label="Location"
        value={values.profile.location}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.profile && errors.profile.location}
      />

      <TextInput
        multiline={true}
        name="profile.education"
        label="Education"
        value={values.profile.education}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.profile && errors.profile.education}
      />

      <TextInput
        multiline={true}
        name="profile.experiance"
        label="Experiance"
        value={values.profile.experiance}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.profile && errors.profile.experiance}
      />

      <Button bordered style={StyleSheet.button} onPress={handleSubmit}>
        <Text>Update</Text>
      </Button>
    </Form>
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
};

const mapStateToProps = (state) => ({
  userDetails: state.userReducer.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (userInfo) => dispatch(editUser(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);
