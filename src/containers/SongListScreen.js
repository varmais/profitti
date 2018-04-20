import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import AppStyles from '../helpers/Styles';
import SongButton from '../components/songs/SongButton';
import NavigationButtonListView from '../components/navigation/NavigationButtonListView';
import { navigatorPropTypes, categoryPropTypes, songPropTypes } from '../helpers/PropTypes';
import { createHeader } from '../helpers/NavigationOptions';

export class SongListScreen extends Component {
  static navigationOptions = ({navigation}) => createHeader(navigation.state.params.category.name);

  static propTypes = {
    songs: PropTypes.arrayOf(songPropTypes()).isRequired,
    navigation: navigatorPropTypes({
      category: categoryPropTypes()
    })
  };

  render() {
    const { navigation } = this.props;
    const songs = this.filterSongs();
    return (
      <ScrollView style={AppStyles.background}>
        <NavigationButtonListView
          title={navigation.state.params.category.name}
          navigation={navigation}
          items={songs}
          renderRow={rowData => <SongButton song={rowData} navigation={navigation} />}
        />
      </ScrollView>
    );
  }

  filterSongs () {
    const { navigation: {state: {params: {category}}}, songs } = this.props;
    if (!category.id) {
      return songs;
    }
    return songs.filter(s => s.category_id === category.id);
  }
}

export default connect(state => ({
  songs: state.songs.songs
}))(SongListScreen);