import * as React from 'react';
import { shallow } from 'enzyme';
import ListOfHospitalsComponent from './ListOfHospitalsComponent';

describe('<ListOfHospitalsComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<ListOfHospitalsComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
  