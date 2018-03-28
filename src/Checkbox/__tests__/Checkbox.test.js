// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Checkbox from "../index";

it("passes its data to the change event handler", () => {
  const onChange = jest.fn();
  const wrapper = shallow(<Checkbox label="" data="the data" onChange={onChange} />);

  wrapper.find("input").simulate("change", "the event");

  expect(onChange.mock.calls).toEqual([["the event", "the data"]]);
});
