import React, { FC } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import EditProfileForm from "components/EditProfileForm";
import ProfilePicture from "components/ProfilePicture";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";

type Props = {
  firstName: string;
  lastName: string;
  profileImage: string;
  jobsApplied: Job[];
};
const Profile: FC<Props> = (props) => {
  return (
    <Container>
      <Jumbotron<React.ElementType> align="center">
        <h1> {props.firstName + " " + props.lastName} </h1>
        <h3> Profile Page </h3>
      </Jumbotron>

      <Row>
        <Col>
          <EditProfileForm />
        </Col>
        <Col>
          <ProfilePicture />
          <h1> Jobs Applied </h1>
          <ListGroup>
            {props.jobsApplied.map((job, index) => (
              <LinkContainer key={index} to={`/jobs/${job.id}`}>
                <ListGroupItem action key={index}>
                  {job.title}
                </ListGroupItem>
              </LinkContainer>
            ))}
          </ListGroup>
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
