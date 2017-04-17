import { createNavigationProp } from '../../testutils';
import SongButton from './SongButton';

describe('components:songs:SongButton', () => {
  const song = {
    id: 123,
    title: 'song title'
  };

  test('renders SongButton', () => {
    const snapshot = renderer.create(<SongButton
      song={song}
      navigation={createNavigationProp()}
    />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  describe('when button is pressed', () => {
    test('it navigates to song screen');
  });
});