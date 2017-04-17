import { createNavigationProp } from '../../testutils';
import { SearchTextInput } from './SearchTextInput';

describe('components:songs:SearchTextInput', () => {
  let searchSongsStub;

  beforeEach(() => {
    searchSongsStub = jest.fn();
  });

  test('renders SongButton', () => {
    const snapshot = renderer.create(<SearchTextInput
      searchSongs={searchSongsStub}
      navigation={createNavigationProp()}
    />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('when search is submitted', () => {
    test('it searches songs');
    test('it navigates to song list screen');
  });
});