import React from 'react';
import ExitButton from '../exit-button';
import { act } from 'react-dom/test-utils';
import { render } from 'react-dom';
import pretty from 'pretty';
import { mount, shallow } from 'enzyme';

jest.mock('react-router-dom', () => ({
  Link: () => 'Link',
  Route: ({ children, path }) => children({ match: path === '/' }),
}));

describe('ExitButton tests', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  test('ExitButton snapshot test', () => {
    act(() => {
      render(<ExitButton></ExitButton>, container);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"Link"`);
  });

  test('includes link to "/"', () => {
    const wrapper = shallow(<ExitButton />);
    expect(wrapper.find('Link').prop('to')).toBe('/');
  });
});
