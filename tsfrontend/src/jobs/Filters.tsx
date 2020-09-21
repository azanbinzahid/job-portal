import React, { FC } from "react";
import { connect } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { RootState } from "redux/reducers";
import Filter from "jobs/Filter";

type Props = {
  filters: any;
};

export const Filters: FC<Props> = ({ filters }) => {
  return (
    <Container<React.ElementType> className="pt-2 pb-2" align="center">
      <Row>
        {Object.keys(filters).map((key) => {
          let temp: any = [];
          filters[key].forEach((e: any) => {
            temp.push({ value: e.name, label: e.name });
          });
          return (
            <Col xs={6} sm={6} md={3}>
              <Filter
                filterName={key.toLowerCase()}
                options={temp}
                isMulti={false}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  filters: state.jobReducer.filters,
});

export default connect(mapStateToProps)(Filters as any);
