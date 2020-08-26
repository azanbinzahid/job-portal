import React from "react";
import { shallow } from "enzyme";
import TextField from "app/common/TextField";
test("renders the component", () => {
  const component = shallow(
    <TextField
      type="text"
      name="username"
      placeholder="Username"
      value="username"
      onChange={jest.fn()}
      error="error"
    />
  );
  expect(component).toMatchSnapshot();
});
