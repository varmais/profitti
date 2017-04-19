import { createNavigationProp } from '../../testutils';
import { SearchTextInput } from './SearchTextInput';
import config from '../../config';

describe('components:songs:SearchTextInput', () => {
  let searchSongsStub;
  let navigateStub;
  let component;

  beforeEach(() => {
    searchSongsStub = sinon.stub();
    navigateStub = sinon.stub();
    const props = {
      navigation: {...createNavigationProp(), navigate: navigateStub},
      searchSongs: searchSongsStub
    };
    component = shallow(<SearchTextInput {...props} />);
  });

  it('renders TextInput', () => {
    expect(component.name()).to.eql('TextInput');
    const props = component.props();
    expect(props.autoCorrect).to.be.false;
    expect(props.placeholder).to.eql('Hae lauluja..');
    expect(props.placeholderTextColor).to.eql(config.colors.grayDark);
    expect(props.returnKeyType).to.eql('search');
  });

  describe('when searh is submitted', () => {
    const text = 'search string';

    beforeEach(() => {
      component.simulate('submitEditing', {nativeEvent: {text}});
    });

    it('submits search string', () => {
      expect(searchSongsStub).to.have.been.calledWithExactly(text);
    });

    it('navigates to song list', () => {
      expect(navigateStub).to.have.been.calledWithExactly('SongSearch', {searchString: text});
    });
  });
});