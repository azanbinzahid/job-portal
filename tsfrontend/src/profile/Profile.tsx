import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import EditProfileForm from "profile/EditProfileForm";
import ProfilePicture from "profile/ProfilePicture";
import JobsApplied from "profile/JobsApplied";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";
import SectionHeading from "app/common/SectionHeading";

type Props = {
  firstName: string;
  lastName: string;
  profileImage: string;
  jobsApplied: Job[];
};
export const Profile: FC<Props> = (props) => {
  return (
    <Container>
      <SectionHeading
        title={props.firstName + " " + props.lastName}
        subtitle="Profile Page"
      />
      <Row>
        <Col md="7">
          <EditProfileForm />
        </Col>
        <Col md="5">
          <ProfilePicture />
          <JobsApplied jobsApplied={props.jobsApplied} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  firstName: state.userReducer.user.firstName,
  lastName: state.userReducer.user.lastName,
  profileImage: state.userReducer.user.profile.image,
  jobsApplied: state.userReducer.user.jobsApplied,
});

export default connect(mapStateToProps)(Profile);
