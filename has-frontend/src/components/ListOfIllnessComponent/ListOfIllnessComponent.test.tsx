import * as React from 'react';
import { shallow } from 'enzyme';
import ListOfIllnessComponent from './ListOfIllnessComponent';

describe('<ListOfIllnessComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<ListOfIllnessComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
  