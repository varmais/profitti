import { createNavigationProp } from '../../testutils';
import SongButton from './SongButton';

describe('components:songs:SongButton', () => {
  let navigateStub;
  let component;
  const song = {title: 'song title', id: 12};

  beforeEach(() => {
    navigateStub = sinon.stub();
    const props = {
      navigation: {...createNavigationProp(), navigate: navigateStub},
      song
    };
    component = shallow(<SongButton {...props} />);
  });

  it('renders NavigationButton', () => {
    expect(component.name()).to.eql('NavigationButton');
    expect(component.prop('text')).to.eql(`${song.id} ${song.title}`);
  });

  describe('when button is pressed', () => {
    beforeEach(() => {
      component.simulate('press');
    });

    it('navigates to Song with correct category', () => {
      expect(navigateStub).to.have.been.calledWithExactly('Song', {song});
    });
  });
});