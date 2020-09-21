import React from "react";
import { shallow } from "enzyme";
import SectionHeading from "app/common/SectionHeading";
test("renders the component", () => {
  const component = shallow(<SectionHeading title="abc" />);
  expect(component).toMatchSnapshot();
});
