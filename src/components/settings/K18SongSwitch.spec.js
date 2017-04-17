import '../../testutils';
import { K18SongSwitch } from './K18SongSwitch';

describe('components:settings:K18SongSwitch', () => {
  let handleValueChangeStub;

  beforeEach(() => {
    handleValueChangeStub = jest.fn();
  });

  describe('when k18 is disabled', () => {
    test('renders K18SongSwitch', () => {
      const snapshot = renderer.create(<K18SongSwitch k18Enabled={false} handleValueChange={handleValueChangeStub} />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });

    describe('when switch is pressed', () => {
      test('it calls onValueChange callback');
    });
  });

  describe('when k18 is enabled', () => {
    test('renders K18SongSwitch', () => {
      const snapshot = renderer.create(<K18SongSwitch k18Enabled={true} handleValueChange={handleValueChangeStub} />).toJSON();
      expect(snapshot).toMatchSnapshot();
    });
  });
});
