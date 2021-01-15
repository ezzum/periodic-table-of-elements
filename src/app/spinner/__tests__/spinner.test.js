import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '../spinner';

test('Spinner return SpinnerStyled', () => {
  const tree = renderer.create(<Spinner></Spinner>).toJSON();

  expect(tree).toMatchSnapshot();
});
