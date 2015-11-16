'use strict';

var React = require('react-native');
var Song = require('./Song');
var styles = require('../modules/styles');
var {
  StyleSheet,
  Component,
  View,
  Text,
  ListView,
  TouchableHighlight
  } = React;

class SongList extends Component {

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
    if (this.props.device !== 'ios') {
      songs = songs.filter(song => song.id === id);
    }

    this.props.navigator.push({
      title: '',
      component: Song,
      passProps: {
        songs: songs,
        id: id,
        device: this.props.device
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

module.exports = SongList;