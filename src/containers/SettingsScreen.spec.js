import SettingsScreen from './SettingsScreen';
import { createNavigationProp } from '../testutils';

describe('containers:SettingsScreen', () => {
  let component;
  let navigateStub;

  beforeEach(() => {
    navigateStub = sinon.stub();
    const navigation = {...createNavigationProp(), navigate: navigateStub};
    component = shallow(<SettingsScreen navigation={navigation} />);
  });

  it('renders UpdateSongsButton', () => {
    expect(component.find('Connect(UpdateSongsButton)')).be.present();
  });

  it('render K18SongSwitch', () => {
    expect(component.find('Connect(K18SongSwitch)')).be.present();
  });

  it('renders link to instructions', () => {
    expectLink(0, 'cutlery', 'Ohjeita');
  });

  it('renders link to profitti info', () => {
    expectLink(1, 'book', 'Laulukirja Profitti');
  });

  it('renders link to trol info', () => {
    expectLink(2, 'info-circle', 'Tradenomiopiskelijaliitto TROL ry');
  });

  describe('when instruction button is clicked', () => {
    it('navigates to instructions screen', () => {
       pressLinkAndExpectNavigation(0, 'Instructions');
    });
  });

  describe('when profitti button is clicked', () => {
    it('navigates to profitti screen', () => {
      pressLinkAndExpectNavigation(1, 'ProfittiInfo');
    });
  });

  describe('when trol info button is clicked', () => {
    it('navigates to trol info screen', () => {
      pressLinkAndExpectNavigation(2, 'TrolInfo');
    });
  });

  function expectLink (at, icon, text) {
    expect(component.find('NavigationButton').at(at).prop('icon')).to.eql(icon);
    expect(component.find('NavigationButton').at(at).prop('text')).to.eql(text);
  }

  function pressLinkAndExpectNavigation (at, screen) {
    component.find('NavigationButton').at(at).simulate('press');
    expect(navigateStub).to.have.been.calledWithExactly(screen);
  }
});
