import React, { Component, PropTypes } from 'react';
import {Text, View } from 'react-native';
import { connect } from 'react-redux';
import config from '../config';
import AppStyles from '../helpers/Styles';
import SongButton from '../components/songs/SongButton';
import { resetSearchSongs } from '../redux/songs';
import NavigationButtonListView from '../components/navigation/NavigationButtonListView';

@connect(state => ({
  songs: state.songs.searchResult
}), {
  resetSearchSongs
})
export default class SongSearchScreen extends Component {
  static navigationOptions = {
    header: ({state}) => ({
      style: AppStyles.header,
      tintColor: config.colors.white,
      title: `Haku: ${state.params.searchString}`
    })
  };

  static propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    resetSearchSongs: PropTypes.func.isRequired
  };

  componentWillUnmount () {
    this.props.resetSearchSongs();
  }

  render() {
    const { navigation, songs } = this.props;
    return (
      <View style={AppStyles.background}>
        <NavigationButtonListView
          title={`Haku: ${navigation.state.params.searchString}`}
          navigation={navigation}
          items={songs}
          renderRow={rowData => <SongButton song={rowData} navigation={navigation} />}
        />
      </View>
    );
  }
}
