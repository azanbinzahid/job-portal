import React from "react";
import { shallow } from "enzyme";
import { Router } from "app/Router";
import { ProtectedRoute } from "app/ProtectedRoute";
test("renders the component", () => {
  const component = shallow(
    <ProtectedRoute isLogged={false} loadded={true} path="" component={null} />
  );
  expect(component).toMatchSnapshot();
});

test("renders the component", () => {
  const component = shallow(
    <ProtectedRoute isLogged={true} loadded={false} path="" component={null} />
  );
  expect(component).toMatchSnapshot();
});

test("renders the component", () => {
  const component = shallow(
    <ProtectedRoute isLogged={true} loadded={true} path="" component={null} />
  );
  expect(component).toMatchSnapshot();
});

test("renders the component", () => {
  const component = shallow(
    <ProtectedRoute isLogged={false} loadded={false} path="" component={null} />
  );
  expect(component).toMatchSnapshot();
});
