import NavigationButton from './NavigationButton';
import config from '../../config';

describe('components:navigation:NavigationButton', () => {
  let onPressStub;
  let component;
  const text = 'button text';
  const icon = 'glass';

  beforeEach(() => {
    onPressStub = sinon.stub();
    component = shallow(<NavigationButton text={text} onPress={onPressStub} />);
  });

  it('renders NavigationButton', () => {
    expect(component.prop('underlayColor')).to.eql(config.colors.gray);
  });

  it('renders text', () => {
    expect(component.find('Text').children().text()).to.eql(text);
  });

  it('renders arrow', () => {
    expect(component.find('Icon').props()).to.eql({
      allowFontScaling: false,
      name: 'ios-arrow-forward',
      size: 24,
      style: {
        bottom: 15,
        position: 'absolute',
        right: 0
      }
    });
  });

  it('does not render icon', () => {
    expect(component.find('Icon')).to.have.length(1);
  });

  describe('when button is pressed', () => {
    beforeEach(() => {
      component.simulate('press');
    });

    it('it calls onPress callback', () => {
      expect(onPressStub).to.have.been.calledOnce;
    });
  });

  describe('when icon is given', () => {
    beforeEach(() => {
      component.setProps({icon});
    });

    it('renders icon', () => {
      expect(component.find('Icon')).to.have.length(2);
      expect(component.find('Icon').first().props()).to.eql({
        allowFontScaling: false,
        name: icon,
        size: 18,
        style: {
          bottom: 20,
          left: 0,
          position: 'absolute'
        }
      });
    });
  });
});
