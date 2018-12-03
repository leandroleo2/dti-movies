import React from "react";
import MovieList from "./MovieList";
import Search from "./Search";
import { shallow, mount } from 'enzyme';

describe("MovieList", () => {

  test("it has Search Component", () => {
    let wrapper = shallow(<MovieList />);
    expect(wrapper.find(Search)).toHaveLength(1);
  });
})