import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import JobItem from "jobs/JobItem";
import PageHeader from "app/common/PageHeader";
import Search from "jobs/Search";
import { Container, CardColumns } from "react-bootstrap";
import { RootState } from "redux/reducers";
import { Job } from "redux/types";
import { useLocation } from "react-router-dom";
import { fetchJobs } from "redux/actions";
import Filter from "jobs/Filter";

type Props = {
  jobs: Job[];
  fetchJobs: (params: String) => void;
};
export const JobList: FC<Props> = ({ jobs, fetchJobs }) => {
  let q = useLocation().search;
  useEffect(() => {
    fetchJobs(q);
  }, [fetchJobs, q]);

  return (
    <Container>
      <PageHeader title="Job Listing Page" />
      <Search />
      <Filter />
      <CardColumns>
        {jobs ? jobs.map((job) => <JobItem key={job.id} job={job} />) : null}
      </CardColumns>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  jobs: state.jobReducer.jobs,
});

const mapDispatchToProps = { fetchJobs };

export default connect(mapStateToProps, mapDispatchToProps)(JobList as any);
