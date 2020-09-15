import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Jumbotron, Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RootState } from "redux/reducers";
import { pluralize } from "utils/helper";

type Props = {
  filters: any;
};

export const FilterStats: FC<Props> = ({ filters }) => {
  return (
    <Jumbotron<React.ElementType> className="pt-5 pb-5" align="center">
      <h1 className="pb-5">Easily filter jobs across</h1>
      <Container>
        <Row>
          {Object.keys(filters).map((key) => {
            return (
              <Col className="pb-3">
                <LinkContainer to="/jobs">
                  <Button variant="outline-dark">
                    <h1>{filters[key].length}+ </h1>
                    {pluralize(key)}
                  </Button>
                </LinkContainer>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Jumbotron>
  );
};

const mapStateToProps = (state: RootState) => ({
  filters: state.jobReducer.filters,
});

export default connect(mapStateToProps)(FilterStats);
