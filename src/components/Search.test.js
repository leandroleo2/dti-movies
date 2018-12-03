import React from "react";
import Search from "./Search";
import { shallow, mount } from 'enzyme';

describe("Search", () => {

  it('renders a label element with the text `Title:`', () => {
    let wrapper = mount(<Search />);
    expect(wrapper.find("label").text()).toEqual("Title:");
    wrapper.unmount();
  });

  it('renders a input element with the id `title`', () => {
    let wrapper = mount(<Search />);
    expect(wrapper.find("#title")).toHaveLength(1);
    wrapper.unmount();
  });

  it('renders a button element with text `Search`', () => {
    let wrapper = mount(<Search />);
    expect(wrapper.find("button").text()).toEqual("Search");
    wrapper.unmount();
  });
});