import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../spinner';

describe('Spinner tests', () => {
  const component = shallow(<Spinner></Spinner>);

  it('snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
