import '../../testutils';
import NavigationButton from './NavigationButton';

describe('components:navigation:NavigationButton', () => {
  let onPressStub;
  const text = 'button text';
  const icon = 'glass';

  beforeEach(() => {
    onPressStub = jest.fn();
  });

  describe('when icon has not been given', () => {
    test('renders NavigationButton', () => {
      const snapshot = renderer.create(<NavigationButton text={text} onPress={onPressStub} />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });

    describe('when button is pressed', () => {
      test('it calls onPress callback');
    });
  });

  describe('when icon is given', () => {
    test('renders NavigationButton', () => {
      const snapshot = renderer.create(<NavigationButton icon={icon} text={text} onPress={onPressStub} />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  });
});
