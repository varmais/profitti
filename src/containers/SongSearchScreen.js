import React, { Component, PropTypes } from 'react';
import {
  ListView,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import config from '../config';
import Styles from '../helpers/Styles';
import SongButton from '../components/songs/SongButton';
import { resetSearchSongs } from '../redux/songs';

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.black,
    padding: 16,
    flex: 1
  }
});

@connect(state => ({
  songs: state.songs.searchResult
}), {
  resetSearchSongs
})
export default class SongSearchScreen extends Component {
  static navigationOptions = {
    header: ({state}) => ({
      style: Styles.header,
      tintColor: config.colors.green,
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

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(props.songs)
    };
  }

  componentWillUnmount () {
    this.props.resetSearchSongs();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <SongButton song={rowData} navigation={navigation} />}
        />
      </View>
    );
  }
}
