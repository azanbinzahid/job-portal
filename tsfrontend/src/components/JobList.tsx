import React, { FC } from "react";
import { connect } from "react-redux";
import JobItem from "components/JobItem";
import { Container, Jumbotron, CardColumns } from "react-bootstrap";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";

type Props = {
  jobs: Job[];
};
const JobList: FC<Props> = (props) => {
  return (
    <Container>
      <Jumbotron<React.ElementType> align="center">
        <h1> Job Listing Page </h1>
      </Jumbotron>
      <CardColumns>
        {props.jobs
          ? props.jobs.map((job) => <JobItem key={job.id} job={job} />)
          : null}
      </CardColumns>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  jobs: state.jobReducer.jobs,
});

export default connect(mapStateToProps)(JobList);
