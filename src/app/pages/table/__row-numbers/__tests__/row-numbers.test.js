import { shallow } from 'enzyme';
import RowNumbers from '../row-numbers';

describe('RowNumbers tests', () => {
  it('snapshot test', () => {
    const wrapper = shallow(<RowNumbers />);
    expect(wrapper).toMatchSnapshot();
  });
});
