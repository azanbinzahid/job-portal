import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Button, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "components/Slider";
import { RootState } from "redux/reducers";

type Props = {
  firstName: string;
  jobCount: number;
  isLogged: boolean;
};

const Home: FC<Props> = ({ firstName, jobCount, isLogged }) => {
  return (
    <div>
      <Slider />
      <Container className="p-5">
        <Jumbotron>
          <h2> Welcome {firstName}</h2>
          <p>
            Looking for a job? Apply online for latest jobs in Pakistan. Browse
            vacancies and apply for the latest jobs near you.
          </p>
          {isLogged ? (
            <LinkContainer to="/jobs">
              <Button variant="primary">
                Explore Jobs <Badge variant="light">{jobCount}</Badge>
              </Button>
            </LinkContainer>
          ) : (
            <LinkContainer to="/login">
              <Button variant="primary"> Login </Button>
            </LinkContainer>
          )}
        </Jumbotron>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  firstName: state.userReducer.user.firstName,
  isLogged: state.userReducer.loggedIn,
  jobCount: state.jobReducer.jobs.length,
});

export default connect(mapStateToProps)(Home);
