import React, { FC } from "react";
import { connect } from "react-redux";
import { Container, Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { RootState } from "redux/reducers";
import { FaAirbnb } from "react-icons/fa";
import SectionHeading from "app/common/SectionHeading";

type Props = {
  filters: any;
};

export const FeaturedCategories: FC<Props> = ({ filters }) => {
  return (
    <Container<React.ElementType> className="" align="center">
      <SectionHeading title="Featured Categories" />

      <Row>
        {filters.Category
          ? filters.Category.map((e: any) => {
              return (
                <Col className="pb-3">
                  <LinkContainer to={`/jobs/?&category=${e.name}`}>
                    <Button variant="link" block>
                      <h1>
                        <FaAirbnb />
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
  );
};

const mapStateToProps = (state: RootState) => ({
  filters: state.jobReducer.filters,
});

export default connect(mapStateToProps)(FeaturedCategories);
