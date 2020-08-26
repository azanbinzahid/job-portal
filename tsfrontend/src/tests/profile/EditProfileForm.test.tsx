import React from "react";
import { shallow } from "enzyme";
import { EditProfileForm } from "profile/EditProfileForm";

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

const profile = {
  location: "",
  bio: "",
  education: "",
  experiance: "",
  birthDate: new Date(11 / 11 / 11),
  image: "",
};

const user = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  jobsApplied: [job, job],
  profile: profile,
};

test("renders the component", () => {
  const component = shallow(
    <EditProfileForm userDetails={user} editUser={jest.fn()} />
  );
  expect(component).toMatchSnapshot();
});
