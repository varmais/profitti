import SearchViewButton from './SearchViewButton';
import MenuViewButton from './MenuViewButton';
import Data from '../data/songs';
import MenuItems from '../data/menu';
import styles from '../modules/styles';
import DataService from '../modules/DataService';
import React, {
  Component,
  View,
  Text,
  ScrollView,
  StyleSheet,
  PixelRatio,
  AsyncStorage
} from 'react-native';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      categories: [],
      menuItems: MenuItems,
      searchString: ''
    };
  }

  componentDidMount () {
    DataService.getData().then((data) => {
      console.log('setting data', data);
      this.setState(data);
    });
  }

  render() {
    var views = [];
    this.state.menuItems.forEach((item, index) => {
      if (item.id === 'SearchView') {
        views.push(<SearchViewButton
          navigator={this.props.navigator}
          songs={this.state.songs}
          item={item}
          key={index} />);
      } else {
        views.push(<MenuViewButton
          navigator={this.props.navigator}
          item={item}
          categories={this.state.categories}
          key={index} />);
      }
    });

    return (
      <ScrollView style={styles.background} bounces={false}>
        <View style={[styles.container, styles.alignCenter]}>
          <Text style={styles.mainTitle}>Laulukirja Profitti</Text>
          <Text style={[styles.subtitle, styles.smallMarginBottom]}>Tradenomiopiskelijaliitto TROL ry</Text>
        </View>
        <View style={styles.container}>
          {views.map((view) => view)}
        </View>
      </ScrollView>
    );
  }
}
