import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {editUser} from '../redux/actions';
import {Form, Input, Item, Text, Button, Label, Textarea} from 'native-base';

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

      <Item floatingLabel>
        <Label> Bio </Label>
        <Input
          multiline={true}
          numberOfLines={5}
          placeholder="bio"
          value={values.profile.bio}
          onChangeText={handleChange('profile.bio')}
          onBlurText={handleBlur('profile.bio')}
        />
      </Item>
      <Text style={StyleSheet.text}>{errors.profile && errors.bio}</Text>

      <Item floatingLabel>
        <Label> Location </Label>
        <Input
          placeholder="location"
          value={values.profile.location}
          onChangeText={handleChange('profile.location')}
          onBlurText={handleBlur('profile.location')}
        />
      </Item>
      <Text style={StyleSheet.text}>{errors.profile && errors.location}</Text>

      <Item floatingLabel>
        <Label> Education </Label>
        <Input
          multiline={true}
          numberOfLines={5}
          placeholder="education"
          value={values.profile.education}
          onChangeText={handleChange('profile.education')}
          onBlurText={handleBlur('profile.education')}
        />
      </Item>
      <Text style={StyleSheet.text}>{errors.profile && errors.lastName}</Text>

      <Item floatingLabel>
        <Label> Experiance </Label>
        <Input
          multiline={true}
          numberOfLines={5}
          placeholder="experiance"
          value={values.profile.experiance}
          onChangeText={handleChange('profile.experiance')}
          onBlurText={handleBlur('profile.experiance')}
        />
      </Item>
      <Text style={StyleSheet.text}>{errors.profile && errors.lastName}</Text>

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
