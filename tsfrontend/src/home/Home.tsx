import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "home/Slider";
import Search from "jobs/Search";
import { RootState } from "redux/reducers";

type Props = {
  firstName: string;
  isLogged: boolean;
};

export const Home: FC<Props> = ({ firstName, isLogged }) => {
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
            <>
              <Search />
            </>
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
});

export default connect(mapStateToProps)(Home);
