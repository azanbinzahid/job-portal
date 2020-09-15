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
      <Container<React.ElementType> className="pt-5 pb-3" align="center">
        <h1>Easily filter jobs across</h1>
      </Container>
      <Jumbotron<React.ElementType> className="pt-5 pb-5" align="center">
        <Container>
          <Row>
            {Object.keys(filters).map((key) => {
              return (
                <Col className="pb-3">
                  <LinkContainer to="/jobs">
                    <Button variant="outline-dark">
                      <h1>
                        {filters[key].length}
                        <Badge variant="warning"></Badge>
                      </h1>
                      {key}
                    </Button>
                  </LinkContainer>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Jumbotron>
      <Container<React.ElementType> className="pt-5 pb-3" align="center">
        <h1>Featured Categories</h1>
        <h1>""</h1>
        <Row>
          {filters.Category
            ? filters.Category.map((e: any) => {
                return (
                  <Col xs="3" className="pb-3">
                    <LinkContainer to={`/jobs/?&category=${e.name}`}>
                      <Button variant="link" block>
                        <h1>
                          <FaBeer />
                        </h1>
                        {e.name}
                      </Button>
                    </LinkContainer>
                  </Col>
                );
              })
            : null}
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
