import React from "react";
import { shallow } from "enzyme";
import { JobList } from "jobs/JobList";

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

test("", () => {});
// test("renders the component", () => {
//   const component = shallow(
//     <JobList jobs={[]} fetchJobs={jest.fn()} filters={null} />
//   );
//   expect(component).toMatchSnapshot();
// });

// test("renders the component", () => {
//   const component = shallow(
//     <JobList jobs={[job]} fetchJobs={jest.fn()} filters={null} />
//   );
//   expect(component).toMatchSnapshot();
// });
