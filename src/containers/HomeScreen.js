import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import SearchTextInput from '../components/songs/SearchTextInput';
import CategoryButton from '../components/songs/CategoryButton';
import HeaderLogo from '../components/common/HeaderLogo';
import AppStyles from '../helpers/Styles';
import { fetchSongs } from '../redux/songs';
import NavigationButtonListView from '../components/navigation/NavigationButtonListView';
import { navigatorPropTypes, categoryPropTypes } from '../helpers/PropTypes';
import config from "../config";

export class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderLogo />,
    headerStyle: {
      backgroundColor: config.colors.black
    }
  };

  static propTypes = {
    navigation: navigatorPropTypes(),
    fetchSongs: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(categoryPropTypes()).isRequired
  };

  componentWillMount () {
    if (!this.props.categories.length) {
      this.props.fetchSongs();
    }
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

export default connect((state) => ({
  categories: state.songs.categories
}), {
  fetchSongs
})(HomeScreen);