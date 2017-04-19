import { createNavigationProp } from '../testutils';
import { SongListScreen } from './SongListScreen';
import SongButton from '../components/songs/SongButton';

describe('containers:SongListScreen', () => {
  let component;
  const selectedCategoryId = 1;
  const songs = [
    {id: 1, title: '', category_id: selectedCategoryId},
    {id: 2, title: '', category_id: 2},
    {id: 3, title: '', category_id: selectedCategoryId}
  ];
  const category = {id: selectedCategoryId, name: 'category name'};
  const navigation = createNavigationProp({category});

  beforeEach(() => {
    const props = {
      navigation,
      songs
    };
    component = shallow(<SongListScreen {...props} />);
  });

  it('renders NavigationButtonListView', () => {
    const expectedItems = songs.filter(s => s.category_id === selectedCategoryId);
    const rowData = expectedItems[0];
    const list = component.find('NavigationButtonListView');
    expect(list.props()).to.contain({navigation, title: category.name});
    expect(list.prop('items')).to.eql(expectedItems);
    expect(list.prop('renderRow')(rowData)).to.eql(<SongButton song={rowData} navigation={navigation} />);
  });
});
