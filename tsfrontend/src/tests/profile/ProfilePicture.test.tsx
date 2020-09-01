import React from "react";
import { shallow } from "enzyme";
import { ProfilePicture } from "profile/ProfilePicture";

test("renders the component", () => {
  const component = shallow(
    <ProfilePicture profileImage="" uploadImage={jest.fn()} />
  );
  expect(component).toMatchSnapshot();
});
