import * as React from 'react';
import { shallow } from 'enzyme';
import MenuComponent from './MenuComponent';

describe('<MenuComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<MenuComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
  