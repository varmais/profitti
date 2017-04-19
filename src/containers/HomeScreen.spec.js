import { HomeScreen } from './HomeScreen';
import { createNavigationProp } from '../testutils';
import CategoryButton from '../components/songs/CategoryButton';

describe('containers:HomeScreen', () => {
  let component;
  let fetchSongsStub;
  const categories = [{id: 1, name: 'cat1'}, {id: 2, name: 'cat2'}];
  const navigation = createNavigationProp();

  beforeEach(() => {
    fetchSongsStub = sinon.stub();
    const props = createProps(categories);
    component = shallow(<HomeScreen {...props} />);
  });

  it('does not fetch songs', () => {
    expect(fetchSongsStub).to.have.not.been.called;
  });

  it('renders search title', () => {
    expect(component.find('Text').children().text()).to.eql('Haku');
  });

  it('renders SearchTextInput', () => {
    expect(component.find('Connect(SearchTextInput)')).be.present();
  });

  it('renders NavigationButtonListView', () => {
    const rowData = categories[0];
    const list = component.find('NavigationButtonListView');
    expect(list.props()).to.contain({navigation, title: 'Kategoriat', enableEmptySections: true});
    expect(list.prop('items')).to.eql(categories);
    expect(list.prop('renderRow')(rowData)).to.eql(<CategoryButton category={rowData} navigation={navigation} />);
  });

  describe('when categories is empty', () => {
    beforeEach(() => {
      const props = createProps([]);
      component = shallow(<HomeScreen {...props} />);
    });

    it('fetches songs', () => {
      expect(fetchSongsStub).to.have.been.calledOnce;
    });
  });

  function createProps (categories) {
    return {
      navigation,
      fetchSongs: fetchSongsStub,
      categories
    };
  }
});
