import React from "react";
import { shallow } from "enzyme";
import { Home } from "home/Home";
test("renders the component", () => {
  const component = shallow(
    <Home firstName="name" jobCount={100} isLogged={true} />
  );
  expect(component).toMatchSnapshot();
});

test("renders the component", () => {
  const component = shallow(
    <Home firstName="name" jobCount={100} isLogged={false} />
  );
  expect(component).toMatchSnapshot();
});
