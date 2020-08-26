import React from "react";
import { shallow } from "enzyme";
import { NavBar } from "app/NavBar";
test("renders the component", () => {
  const component = shallow(<NavBar isLogged={true} logUserOut={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
test("renders the component", () => {
  const component = shallow(<NavBar isLogged={false} logUserOut={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
