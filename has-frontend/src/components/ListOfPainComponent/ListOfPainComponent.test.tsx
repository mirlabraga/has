import * as React from 'react';
import { shallow } from 'enzyme';
import ListOfPainComponent from './ListOfPainComponent';

describe('<ListOfPainComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<ListOfPainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
  