import React, { FC } from "react";
import { connect } from "react-redux";
import { Image, Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import { uploadImage } from "redux/actions";
import { RootState } from "redux/reducers";

type Props = {
  profileImage: string;
  uploadImage: (values: { image: string }) => void;
};
const ProfilePicture: FC<Props> = (props) => {
  const { handleSubmit, setFieldValue } = useFormik({
    initialValues: { image: "" },
    onSubmit(values) {
      props.uploadImage(values);
    },
  });

  return (
    <Container<React.ElementType> align="center" className="pb-5">
      <Image src={process.env.REACT_APP_BASE_URL + props.profileImage} fluid />
      <Form
        inline
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <Form.File<React.ElementType>
          name="image"
          onChange={(event: any) => {
            setFieldValue("image", event.currentTarget.files[0]);
          }}
        />

        <Button variant="primary" type="submit">
          Update Image
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  profileImage: state.userReducer.user.profile.image,
});

const mapDispatchToProps = {
  uploadImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
