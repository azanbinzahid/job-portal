import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import EditProfileForm from "profile/EditProfileForm";
import ProfilePicture from "profile/ProfilePicture";
import JobsApplied from "profile/JobsApplied";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";
import PageHeader from "app/common/PageHeader";

type Props = {
  firstName: string;
  lastName: string;
  profileImage: string;
  jobsApplied: Job[];
};
export const Profile: FC<Props> = (props) => {
  return (
    <Container>
      <PageHeader
        title={props.firstName + " " + props.lastName}
        subtitle="Profile Page"
      />
      <Row>
        <Col>
          <EditProfileForm />
        </Col>
        <Col>
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
