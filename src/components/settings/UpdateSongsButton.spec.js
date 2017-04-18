import '../../testutils';
import { UpdateSongsButton } from './UpdateSongsButton';

describe('components:settings:UpdateSongsButton', () => {
  let fetchSongsStub;

  beforeEach(() => {
    fetchSongsStub = jest.fn();
  });

  describe('when songs are not loading', () => {
    test('renders UpdateSongsButton', () => {
      const snapshot = renderer.create(<UpdateSongsButton loading={false} fetchSongs={fetchSongsStub} />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });

    describe('when button is pressed', () => {
      test('it calls fetchSongs callback');
    });
  });

  describe('when songs are loading', () => {
    test('renders UpdateSongsButton', () => {
      const snapshot = renderer.create(<UpdateSongsButton loading={true} fetchSongs={fetchSongsStub} />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  });
});