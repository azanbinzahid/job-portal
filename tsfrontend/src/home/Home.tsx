import React, { FC } from "react";
import Slider from "home/Slider";
import FeaturedCategories from "./FeaturedCategories";
import FilterStats from "./FilterStats";
import JobList from "jobs/JobList";
import SectionHeading from "app/common/SectionHeading";

type Props = {};

export const Home: FC<Props> = () => {
  return (
    <>
      <Slider />
      <FeaturedCategories />
      <FilterStats />
      <SectionHeading title="Popular Jobs" />

      <JobList limit={3} />
    </>
  );
};

export default Home;
