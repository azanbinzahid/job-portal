import React from "react";
import { shallow } from "enzyme";
import CardList from "jobs/CardList";
test("renders the component", () => {
  const component = shallow(<CardList title="" list={[]} />);
  expect(component).toMatchSnapshot();
});
