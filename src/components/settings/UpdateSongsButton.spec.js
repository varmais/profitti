import { UpdateSongsButton } from './UpdateSongsButton';
import config from '../../config';

describe('components:settings:UpdateSongsButton', () => {
  let fetchSongsStub;
  let component;

  beforeEach(() => {
    fetchSongsStub = sinon.stub();
    component = shallow(<UpdateSongsButton loading={false} fetchSongs={fetchSongsStub} />);
  });

  it('renders title', () => {
    expect(component.find('Text').children().text()).to.eql('Päivitä laulut');
  });

  it('renders enabled button', () => {
    expectButton(false);
  });

  it('renders disabled spinner', () => {
    expectSpinner(false);
  });

  describe('when button has been clicked', () => {
    beforeEach(() => {
      component.find('Button').simulate('press');
    });

    it('calls fetchSongs callback', () => {
      expect(fetchSongsStub).to.have.been.calledOnce;
    });

    describe('when switch is on', () => {
      beforeEach(() => {
        component.setProps({loading: true});
      });

      it('renders disabled button', () => {
        expectButton(true);
      });

      it('renders enabled spinner', () => {
        expectSpinner(true);
      });
    });
  });

  function expectButton (disabled) {
    expect(component.find('Button').props()).to.eql({
      color: config.colors.green,
      disabled,
      onPress: fetchSongsStub,
      title: 'Päivitä',
      accessibilityLabel: 'Päivitä laulut'
    });
  }

  function expectSpinner (visible) {
    expect(component.find('Spinner').prop('visible')).to.eql(visible);
  }
});
