import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import local from '../../data/local'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should create a snapshot of App', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when changeArticle is called', () => {
    //setup
    const wrapper = shallow(<App />);
    const mockEvent = {
      target: {
        className: 'localNews'
      }
    }
    const expected = local
    
    //execution
    wrapper.instance().changeArticle(mockEvent);

    //expectation
    expect(wrapper.state('news')).toEqual(expected)
  });

});