import React from "react";
import { shallow } from "enzyme";
import { AlertBox } from "alerts/AlertBox";

const alert = {
  id: "abc",
  alertType: "danger",
  msg: "danger",
};

test("renders the component", () => {
  const component = shallow(<AlertBox alerts={[alert]} />);
  expect(component).toMatchSnapshot();
});

test("renders the component", () => {
  const component = shallow(<AlertBox alerts={[]} />);
  expect(component).toMatchSnapshot();
});
