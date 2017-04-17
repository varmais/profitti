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
import { resetSearchSongs } from '../redux/songs';

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

  dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.guid !== r2.guid
  });

  componentWillUnmount () {
    this.props.resetSearchSongs();
  }

  render() {
    const { navigation, songs } = this.props;
    return (
      <View style={AppStyles.background}>
        <View style={AppStyles.container}>
          <View style={AppStyles.titleContainer}>
            <Text style={AppStyles.title}>
              Haku: {navigation.state.params.searchString}
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
}
