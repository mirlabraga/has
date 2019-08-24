import * as React from 'react';
import { shallow } from 'enzyme';
import IllnessComponent from './IllnessComponent';

describe('<IllnessComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<IllnessComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
  