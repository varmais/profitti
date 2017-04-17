import { createNavigationProp } from '../../testutils';
import CategoryButton from './CategoryButton';

describe('components:songs:CategoryButton', () => {
  const category = {
    id: 123,
    name: 'category name'
  };

  test('renders CategoryButton', () => {
    const snapshot = renderer.create(<CategoryButton
      category={category}
      navigation={createNavigationProp()}
    />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('when button is pressed', () => {
    test('it navigates to song list screen');
  });
});