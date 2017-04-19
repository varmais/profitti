import HeaderLogo from './HeaderLogo';

describe('components:common:HeaderLogo', () => {
  it('renders HeaderLogo', () => {
    const component = shallow(<HeaderLogo />);
    expect(component.props()).to.eql({
      resizeMode: 'contain',
      source: {uri: '../../assets/images/trol-logo-full.png'},
      style: {height: 35}
    });
  });
});