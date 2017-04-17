import React, { Component, PropTypes } from 'react';
import {
  ListView,
  ScrollView,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import SearchTextInput from '../components/home/SearchTextInput';
import CategoryButton from '../components/songs/CategoryButton';
import Separator from '../components/common/Separator';
import HeaderLogo from '../components/common/HeaderLogo';
import AppStyles from '../helpers/Styles';
import { fetchSongs } from '../redux/songs';

@connect((state) => ({
  categories: state.songs.categories
}), {
  fetchSongs
})
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: () => ({
      style: AppStyles.header,
      title: <HeaderLogo />
    })
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    fetchSongs: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  };

  dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.guid !== r2.guid
  });

  componentDidMount () {
    this.props.fetchSongs();
  }

  render () {
    const { navigation, categories } = this.props;
    return (
      <ScrollView style={AppStyles.background}>
        <View>
          <View style={AppStyles.container}>
            <View style={AppStyles.titleContainer}>
              <Text style={AppStyles.title}>Haku</Text>
            </View>
            <SearchTextInput navigation={navigation}/>
          </View>
          <View style={AppStyles.container}>
            <View style={AppStyles.titleContainer}>
              <Text style={AppStyles.title}>Kategoriat</Text>
            </View>
            <ListView
              enableEmptySections
              dataSource={this.dataSource.cloneWithRows(categories)}
              renderRow={rowData => <CategoryButton category={rowData} navigation={navigation} />}
              renderSeparator={() => <Separator />}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}