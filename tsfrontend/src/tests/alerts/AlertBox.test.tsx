import React from "react";
import { shallow } from "enzyme";
import { AlertBox } from "alerts/AlertBox";
test("renders the component", () => {
  const component = shallow(<AlertBox alerts={[]} />);
  expect(component).toMatchSnapshot();
});
