import React, { Component, PropTypes } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import SearchTextInput from '../components/home/SearchTextInput';
import CategoryButton from '../components/songs/CategoryButton';
import HeaderLogo from '../components/common/HeaderLogo';
import AppStyles from '../helpers/Styles';
import { fetchSongs } from '../redux/songs';
import NavigationButtonListView from '../components/navigation/NavigationButtonListView';

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
          <NavigationButtonListView
            title="Kategoriat"
            enableEmptySections
            navigation={navigation}
            items={categories}
            renderRow={rowData => <CategoryButton category={rowData} navigation={navigation} />}
          />
        </View>
      </ScrollView>
    );
  }
}