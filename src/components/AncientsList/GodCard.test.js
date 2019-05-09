import React from 'react';
import { shallow } from 'enzyme';
import GodCard from './GodCard';

const god = {
  name: 'Ra',
  superpower: 'Can stare at the sun',
  end_of_an_era: '1014-11-17T00:00:00.000+00:00'
};

it('expects to render GodCard component', () => {
  expect(shallow(<GodCard god={god} />).length).toEqual(1);
});

it('expects to GodCard have an image', () => {
  const wrapper = shallow(<GodCard god={god} />);
  expect(wrapper.find('img').length).toBe(1);
});

it('expects to GodCard have item with class godCard', () => {
  const wrapper = shallow(<GodCard god={god} />);
  expect(wrapper.find('.godCard').length).toBe(1);
});
