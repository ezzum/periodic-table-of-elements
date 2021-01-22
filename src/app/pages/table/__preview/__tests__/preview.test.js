import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Preview from '../preview';

describe('Preview tests', () => {
  const initialState = {
    previewElement: {
      number: 3,
      name: 'литий',
      group: 'metal',
      symbol: 'Li',
      atomicMass: 1.023,
    },
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Preview />
      </Provider>
    );
    console.log(wrapper.debug());
  });

  it('snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
