import React from "react";
import { shallow } from "enzyme";
import PageHeader from "app/common/PageHeader";
test("renders the component", () => {
  const component = shallow(<PageHeader title="abc" />);
  expect(component).toMatchSnapshot();
});
