import React from "react";
import { shallow } from "enzyme";
import { Profile } from "profile/Profile";

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
  const component = shallow(
    <Profile firstName="" lastName="" profileImage="" jobsApplied={[job]} />
  );
  expect(component).toMatchSnapshot();
});
