import React from "react";

import { Button } from "../../src/components/button";

const handleClick = () => {
  alert("clicked!");
};

describe(Button, () => {
  it("should render children text", () => {
    const button = shallow(<Button>Save</Button>);
    expect(button).toMatchSnapshot();
  });

  it("should handle click event", () => {
    const button = shallow(<Button onClick={handleClick} />);
    window.alert = jest.fn();
    button.simulate("click");
    expect(window.alert).toHaveBeenCalledWith("clicked!");
  });

  it("should render a raised button", () => {
    const wrapper = shallow(<Button variant="raised" />);
    expect(wrapper.prop("variant")).toEqual("raised");
  });
});
