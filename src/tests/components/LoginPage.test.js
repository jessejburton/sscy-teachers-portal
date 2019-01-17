import React from 'react';
import LoginPage from '../../components/LoginPage';
import { shallow } from 'enzyme';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);

  expect(wrapper).toMatchSnapshot();
});
