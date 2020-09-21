import React from "react";
import { shallow } from "enzyme";
import { Home } from "home/Home";
test("renders the component", () => {
  const component = shallow(<Home />);
  expect(component).toMatchSnapshot();
});
