import { createNavigationProp } from '../../testutils';
import CategoryButton from './CategoryButton';

describe('components:songs:CategoryButton', () => {
  let navigateStub;
  let component;
  const category = {name: 'category', id: 12};

  beforeEach(() => {
    navigateStub = sinon.stub();
    const props = {
      navigation: {...createNavigationProp(), navigate: navigateStub},
      category
    };
    component = shallow(<CategoryButton {...props} />);
  });

  it('renders NavigationButton', () => {
    expect(component.name()).to.eql('NavigationButton');
    expect(component.prop('text')).to.eql(category.name);
  });

  describe('when button is pressed', () => {
    beforeEach(() => {
      component.simulate('press');
    });

    it('navigates to SongList with correct category', () => {
      expect(navigateStub).to.have.been.calledWithExactly('SongList', {category});
    });
  });
});