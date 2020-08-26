import React from "react";
import { shallow } from "enzyme";
import { Login } from "auth/Login";
test("renders the component", () => {
  const component = shallow(<Login isLogged={false} fetchUser={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
test("renders the component", () => {
  const component = shallow(<Login isLogged={true} fetchUser={jest.fn()} />);
  expect(component).toMatchSnapshot();
});
