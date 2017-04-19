import { createNavigationProp } from '../testutils';
import { SongSearchScreen } from './SongSearchScreen';
import SongButton from '../components/songs/SongButton';

describe('containers:SongSearchScreen', () => {
  let component;
  let resetSearchSongsStub;
  const searchString = 'search string';
  const songs = [{id: 1, title: 'song1'}, {id: 2, title: 'song2'}];
  const navigation = createNavigationProp({searchString});

  beforeEach(() => {
    resetSearchSongsStub = sinon.stub();
    component = shallow(<SongSearchScreen songs={songs} navigation={navigation} resetSearchSongs={resetSearchSongsStub} />);
  });

  it('renders NavigationButtonListView', () => {
    const rowData = songs[0];
    const list = component.find('NavigationButtonListView');
    expect(list.props()).to.contain({
      items: songs,
      navigation,
      title: `Haku: ${searchString}`
    });
    expect(list.prop('renderRow')(rowData)).to.eql(<SongButton song={rowData} navigation={navigation} />);
  });

  describe('when component unmounts', () => {
    beforeEach(() => {
      component.unmount();
    });

    it('resets song search data', () => {
      expect(resetSearchSongsStub).to.have.been.calledOnce;
    });
  });
});
