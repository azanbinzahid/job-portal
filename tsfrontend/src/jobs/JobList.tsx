import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, CardColumns, Spinner } from "react-bootstrap";
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
    setLoadindSpinner(true);
  }, [fetchJobs, q]);

  const [loadindSpinner, setLoadindSpinner] = useState(true);

  if (loadindSpinner) {
    setTimeout(() => {
      setLoadindSpinner(false);
    }, 2000);
    return (
      <Container<React.ElementType> align="center" className="p-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container>
      <CardColumns>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
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
