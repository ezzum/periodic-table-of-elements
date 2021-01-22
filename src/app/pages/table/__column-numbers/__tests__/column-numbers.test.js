import { shallow } from 'enzyme';
import ColumnNumbers from '../column-numbers';

describe('ColumnNumbers tests', () => {
  it('snapshot test', () => {
    const wrapper = shallow(<ColumnNumbers />);
    expect(wrapper).toMatchSnapshot();
  });
});
