import React from 'react';
import {connect} from 'react-redux';
import {Image, Form, Button, Container} from 'react-bootstrap';
import {useFormik} from 'formik';
import {uploadImage} from 'redux/actions';

const ProfilePicture = (props) => {
  const {handleSubmit, setFieldValue} = useFormik({
    initialValues: {image: ''},
    onSubmit(values) {
      props.uploadImage(values);
    },
  });

  return (
    <Container align="center" className="pb-5">
      <Image src={process.env.REACT_APP_BASE_URL + props.profileImage} fluid />

      <Form inline onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicDate">
          <Form.File
            name="image"
            onChange={(event) => {
              setFieldValue('image', event.currentTarget.files[0]);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Image
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  profileImage: state.userReducer.user.profile.image,
});

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (userInfo) => dispatch(uploadImage(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
