import React, { FC } from "react";
import SectionHeading from "app/common/SectionHeading";
import Search from "jobs/Search";
import Filters from "jobs/Filters";
import JobList from "jobs/JobList";
import { RootState } from "redux/reducers";
import { connect } from "react-redux";

type Props = {
  jobCount: number;
};

export const Jobs: FC<Props> = ({ jobCount }) => {
  return (
    <>
      <SectionHeading
        title="Jobs Search"
        subtitle={jobCount.toString() + " results found"}
      />
      <Search />
      <Filters />
      <JobList />
    </>
  );
};
const mapStateToProps = (state: RootState) => ({
  jobCount: state.jobReducer.jobs.length,
});

export default connect(mapStateToProps)(Jobs as any);
