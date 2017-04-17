import '../../testutils';
import HeaderLogo from './HeaderLogo';

describe('components:common:HeaderLogo', () => {
  test('renders HeaderLogo', () => {
    const snapshot = renderer.create(<HeaderLogo />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});