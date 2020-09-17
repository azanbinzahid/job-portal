import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Container, CardColumns } from "react-bootstrap";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";
import { useLocation } from "react-router-dom";
import { fetchJobs } from "redux/actions";
import JobCard from "jobs/JobCard";

type Props = {
  jobs: Job[];
  fetchJobs: (params: String) => void;
  limit?: number;
};

export const JobList: FC<Props> = ({ jobs, fetchJobs, limit }) => {
  let q = useLocation().search;
  if (limit && jobs.length > limit) {
    jobs = jobs.slice(0, limit);
  }

  useEffect(() => {
    fetchJobs(q);
  }, [fetchJobs, q]);

  return (
    <Container>
      <CardColumns>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <h1>No results found!</h1>
        )}
      </CardColumns>
    </Container>
  );
};

const mapStateToProps = (state: RootState, ownProps: any) => ({
  jobs: state.jobReducer.jobs,
  filters: state.jobReducer.filters,
});

const mapDispatchToProps = { fetchJobs };

export default connect(mapStateToProps, mapDispatchToProps)(JobList as any);
