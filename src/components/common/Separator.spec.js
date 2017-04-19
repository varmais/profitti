import Separator from './Separator';
import config from '../../config';

describe('components:common:Separator', () => {
  it('renders Separator', () => {
    const component = shallow(<Separator/>);
    expect(component.props()).to.eql({
      style: {
        backgroundColor: config.colors.graySubtle,
        height: 0.5
      }
    });
  });
});