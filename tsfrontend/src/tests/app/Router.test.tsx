import React from "react";
import { shallow } from "enzyme";
import { Router } from "app/Router";
test("renders the component", () => {
  const component = shallow(
    <Router autoLogin={jest.fn()} fetchJobs={jest.fn()} />
  );
  expect(component).toMatchSnapshot();
});
