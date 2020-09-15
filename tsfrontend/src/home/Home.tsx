import React, { FC } from "react";
import Slider from "home/Slider";
import FeaturedCategories from "./FeaturedCategories";
import FilterStats from "./FilterStats";

type Props = {};

export const Home: FC<Props> = () => {
  return (
    <>
      <Slider />
      <FeaturedCategories />
      <FilterStats />
    </>
  );
};

export default Home;
