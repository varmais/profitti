import { K18SongSwitch } from './K18SongSwitch';
import config from '../../config';

describe('components:settings:K18SongSwitch', () => {
  let handleValueChangeStub;
  let component;

  beforeEach(() => {
    handleValueChangeStub = sinon.stub();
    component = shallow(<K18SongSwitch k18Enabled={false} handleValueChange={handleValueChangeStub} />);
  });

  it('renders title', () => {
    expect(component.find('Text').children().text()).to.eql('K18-laulut');
  });

  it('renders disabled switch', () => {
    expectSwitch(false);
  });

  describe('when switch has been clicked', () => {
    beforeEach(() => {
      component.find('Switch').simulate('valueChange');
    });

    it('calls handleValueChange callback', () => {
      expect(handleValueChangeStub).to.have.been.calledOnce;
    });

    describe('when switch is on', () => {
      it('renders enabled switch', () => {
        component.setProps({k18Enabled: true});
        expectSwitch(true);
      });
    });
  });

  function expectSwitch (value) {
    expect(component.find('Switch').props()).to.eql({
      tintColor: config.colors.gray,
      onTintColor: config.colors.green,
      value,
      onValueChange: handleValueChangeStub,
      style: {
        bottom: 13.5,
        position: 'absolute',
        right: 0
      }
    });
  }
});
