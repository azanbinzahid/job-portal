import React, { FC } from "react";
import { connect } from "react-redux";
import JobItem from "jobs/JobItem";
import PageHeader from "app/common/PageHeader";
import { Container, CardColumns } from "react-bootstrap";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";

type Props = {
  jobs: Job[];
};
const JobList: FC<Props> = (props) => {
  return (
    <Container>
      <PageHeader title="Job Listing Page" />
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
