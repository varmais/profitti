import React, { Component, PropTypes } from 'react';
import {
  ListView,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import config from '../config';
import Styles from '../helpers/Styles';
import SongButton from './songs/SongButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.black,
    padding: 16,
    flex: 1
  }
});

@connect(state => ({
  songs: state.songs.songs
}))
export default class CategoryListScreen extends Component {
  static navigationOptions = {
    header: ({state}) => ({
      style: Styles.header,
      tintColor: config.colors.green,
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

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });
    const { navigation } = this.props;
    const songs = props.songs.filter(s => s.category_id === navigation.state.params.category.id);
    this.state = {
      dataSource: dataSource.cloneWithRows(songs)
    };
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
