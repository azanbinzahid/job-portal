import React from "react";
import { shallow } from "enzyme";
import { JobList } from "jobs/JobList";
test("renders the component", () => {
  const component = shallow(<JobList jobs={[]} />);
  expect(component).toMatchSnapshot();
});
