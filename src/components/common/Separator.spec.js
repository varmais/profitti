import '../../testutils';
import Separator from './Separator';

describe('components:common:Separator', () => {
  test('renders Separator', () => {
    const snapshot = renderer.create(<Separator />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});