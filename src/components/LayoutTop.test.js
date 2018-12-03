import React from "react";
import Top from "./layoutTop";
import { shallow, mount } from 'enzyme';

describe("LayoutTop", () => {

  it('renders a h1 with the content `Dti Movies`', () => {
    let wrapper = mount(<Top />);
    expect(wrapper.find("h1").text().trim()).toEqual("Dti Movies");
    wrapper.unmount();
  })
});