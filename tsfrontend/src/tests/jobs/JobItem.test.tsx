import React from "react";
import { shallow } from "enzyme";
import JobItem from "jobs/JobItem";

const job = {
  id: 1,
  location: ["Lahore"],
  category: ["Customer Service"],
  qualification: ["Bachelors"],
  applicants: ["admin"],
  company: "Modern Tech",
  title: "WordPress Developer",
  salaray: 60000,
  description: "This is test job description",
  experiance: 1,
  datestamp: new Date(11 / 11 / 11),
};

test("renders the component", () => {
  const component = shallow(<JobItem job={job} />);
  expect(component).toMatchSnapshot();
});
