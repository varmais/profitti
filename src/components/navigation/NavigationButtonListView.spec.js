import {createNavigationProp} from '../../testutils';
import { View } from 'react-native';
import NavigationButtonListView from './NavigationButtonListView';

describe('components:navigation:NavigationButtonListView', () => {
  const renderRow = () => <View />;
  const items = [{item: 1}, {item: 4}];
  const title = 'title';

  test('renders NavigationButtonListView', () => {
    const snapshot = renderer.create(<NavigationButtonListView
      items={items}
      renderRow={renderRow}
      title={title}
      navigation={createNavigationProp()}
    />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
