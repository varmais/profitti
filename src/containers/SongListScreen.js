import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import config from '../config';
import AppStyles from '../helpers/Styles';
import SongButton from '../components/songs/SongButton';
import NavigationButtonListView from '../components/navigation/NavigationButtonListView';

@connect(state => ({
  songs: state.songs.songs
}))
export default class SongListScreen extends Component {
  static navigationOptions = {
    header: ({state}) => ({
      style: AppStyles.header,
      tintColor: config.colors.white,
      title: state.params.category.name
    })
  };

  static propTypes = {
    songs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { navigation } = this.props;
    const songs = this.filterSongs();
    return (
      <View style={AppStyles.background}>
        <NavigationButtonListView
          title={navigation.state.params.category.name}
          navigation={navigation}
          items={songs}
          renderRow={rowData => <SongButton song={rowData} navigation={navigation} />}
        />
      </View>
    );
  }

  filterSongs () {
    const { navigation, songs } = this.props;
    return songs.filter(s => s.category_id === navigation.state.params.category.id);
  }
}
