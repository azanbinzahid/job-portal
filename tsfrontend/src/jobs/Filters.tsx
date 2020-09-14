import React, { FC } from "react";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { RootState } from "redux/reducers";
import Filter from "jobs/Filter";

type Props = {
  filters: any;
};

export const Filters: FC<Props> = ({ filters }) => {
  return (
    <Row>
      {Object.keys(filters).map((key) => {
        let temp: any = [];
        filters[key].forEach((e: any) => {
          temp.push({ value: e.name, label: e.name });
        });
        return (
          <Col>
            <Filter
              filterName={key.toLowerCase()}
              options={temp}
              isMulti={false}
            />
          </Col>
        );
      })}
    </Row>
  );
};

const mapStateToProps = (state: RootState) => ({
  filters: state.jobReducer.filters,
});

export default connect(mapStateToProps)(Filters as any);
