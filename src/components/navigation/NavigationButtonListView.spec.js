import { createNavigationProp } from '../../testutils';
import { View, ScrollView } from 'react-native';
import NavigationButtonListView from './NavigationButtonListView';
import Separator from '../common/Separator';

describe('components:navigation:NavigationButtonListView', () => {
  let component;
  const renderRow = () => <View />;
  const items = [{item: 1}, {item: 4}];
  const title = 'title';

  beforeEach(() => {
    component = shallow(<NavigationButtonListView
      items={items}
      renderRow={renderRow}
      title={title}
      navigation={createNavigationProp()}
    />);
  });

  it('renders title', () => {
    expect(component.find('Text').children().text()).to.eql(title);
  });

  it('renders list view', () => {
    const props = component.find('ListView').props();
    expect(props.title).to.eql(title);
    expect(props.items).to.eql(items);
    expect(props.renderRow).to.eql(renderRow);
    expect(props.renderSeparator()).to.eql(<Separator/>);
    expect(props.dataSource).to.eql({
      _dataBlob: items
    });
  });
});
