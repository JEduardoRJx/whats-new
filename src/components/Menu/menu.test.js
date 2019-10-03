import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu.js'

describe('Menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu />)
  });

  it('should create a snapshot of menu', () => {
    expect(wrapper).toMatchSnapshot();
  });

});