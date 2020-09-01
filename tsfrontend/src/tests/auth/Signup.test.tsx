import React from "react";
import { shallow } from "enzyme";
import { Signup } from "auth/Signup";
test("renders the component", () => {
  const component = shallow(<Signup isLogged={false} signUserUp={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
test("renders the component", () => {
  const component = shallow(<Signup isLogged={true} signUserUp={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
