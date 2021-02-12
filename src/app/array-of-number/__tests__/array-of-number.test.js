import React from "react";
import { mount } from "enzyme";

import ArrayOfNumber from "../array-of-number";

describe("array-of-number tests", () => {
  const props = {
    numberCount: 8,
  };

  const FakeComponent = (props) => {
    return <div>{props.numbers}</div>;
  };

  const Component = ArrayOfNumber(FakeComponent, "test");
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Component {...props} />);
  });

  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
