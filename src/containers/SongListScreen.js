import React, { Component, PropTypes } from 'react';
import {
  ListView,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import config from '../config';
import AppStyles from '../helpers/Styles';
import SongButton from '../components/songs/SongButton';
import Separator from '../components/common/Separator';

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

  dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.guid !== r2.guid
  });

  render() {
    const { navigation } = this.props;
    const songs = this.filterSongs();
    return (
      <View style={AppStyles.background}>
        <View style={AppStyles.container}>
          <View style={AppStyles.titleContainer}>
            <Text style={AppStyles.title}>
              {navigation.state.params.category.name}
            </Text>
          </View>
          <ListView
            dataSource={this.dataSource.cloneWithRows(songs)}
            renderRow={rowData => <SongButton song={rowData} navigation={navigation} />}
            renderSeparator={() => <Separator />}
          />
        </View>
      </View>
    );
  }

  filterSongs () {
    const { navigation, songs } = this.props;
    return songs.filter(s => s.category_id === navigation.state.params.category.id);
  }
}
