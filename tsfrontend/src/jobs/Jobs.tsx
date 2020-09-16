import React, { FC } from "react";
import SectionHeading from "app/common/SectionHeading";
import Search from "jobs/Search";
import Filters from "jobs/Filters";
import JobList from "jobs/JobList";

type Props = {};

export const Jobs: FC<Props> = () => {
  return (
    <>
      <SectionHeading title="Jobs Search" />
      <Search />
      <Filters />
      <JobList />
    </>
  );
};

export default Jobs;
