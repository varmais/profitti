import Song from './Song';
import styles from '../modules/styles';
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  ListView,
  TouchableHighlight,
  Platform
} from 'react-native';

export default class SongList extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.songs)
    };
  }

  rowPressed(id, title, lyrics) {
    var songs = this.props.songs;
    if (Platform.OS !== 'ios') {
      songs = songs.filter(song => song.id === id);
    }

    this.props.navigator.push({
      title: '',
      component: Song,
      passProps: {
        songs: songs,
        id: id
      }
    });
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <TouchableHighlight
        style={styles.listItem}
        onPress={this.rowPressed.bind(this, rowData.id, rowData.title)}
        underlayColor='#718586'
        key={rowData.id}>
        <Text style={styles.listText}>{rowData.id}. {rowData.title}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.background}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={styles.smallMarginBottom}/>
      </View>
    );
  }
}
