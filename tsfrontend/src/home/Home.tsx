import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Button, Col, Row, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Slider from "home/Slider";
import { RootState } from "redux/reducers";
import { FaBeer } from "react-icons/fa";

type Props = {
  firstName: string;
  isLogged: boolean;
  filters: any;
};

export const Home: FC<Props> = ({ firstName, isLogged, filters }) => {
  return (
    <>
      <Slider />
      <Container<React.ElementType> className="pt-5 pb-5" align="center">
        <Row>
          {Object.keys(filters).map((key) => {
            return (
              <Col>
                <LinkContainer to="/jobs">
                  <Button variant="outline-primary">
                    <h1>
                      {filters[key].length}
                      <Badge variant="warning"></Badge>
                    </h1>
                    {key}{" "}
                  </Button>
                </LinkContainer>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  firstName: state.userReducer.user.firstName,
  isLogged: state.userReducer.loggedIn,
  filters: state.jobReducer.filters,
});

export default connect(mapStateToProps)(Home);
