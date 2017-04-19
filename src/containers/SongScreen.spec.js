import SongScreen from './SongScreen';
import { createNavigationProp } from '../testutils';

describe('containers:SongScreen', () => {
  let component;
  const song = {
    title: 'song title',
    lyrics: 'song lyrics'
  };

  before(() => {
    component = shallow(<SongScreen navigation={createNavigationProp({song})} />);
  });

  it('renders song title', () => {
    expect(component.find('Text').first().children().text()).to.eql(song.title);
  });

  it('renders songs lyrics', () => {
    expect(component.find('Text').last().children().text()).to.eql(song.lyrics);
  });
});
