import React from "react";
import { shallow } from "enzyme";
import Slider from "home/Slider";
test("renders the component", () => {
  const component = shallow(<Slider />);
  expect(component).toMatchSnapshot();
});
