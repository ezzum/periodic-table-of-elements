import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Description from '../description';

jest.mock('../../../exit-button/exit-button', () => 'div');

describe('Description tests', () => {
  const initialState = { activeElement: 'element' };
  const mockStore = configureStore();
  let store, container;

  beforeEach(() => {
    store = mockStore(initialState);
    // container = shallow(<Description store={store} />);
    container = mount(
      <Provider store={store}>
        <Description />
      </Provider>
    );
  });
  it('snapshot test', () => {
    expect(container).toMatchSnapshot();
  });
});
