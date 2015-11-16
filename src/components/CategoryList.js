'use strict';

var React = require('react-native');
var SongList = require('./SongList');
var Songs = require('../data/songs').songs;
var styles = require('../modules/styles');
var {
  StyleSheet,
  Component,
  View,
  Text,
  ListView,
  TouchableHighlight
  } = React;

class CategoryList extends Component {

  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.categories)
    };
  }

  rowPressed(category, title) {
    var songs = Songs.filter(song => song.category === category);
    this.props.navigator.push({
      title: title,
      component: SongList,
      passProps: {
        songs: songs,
        device: this.props.device
      }
    });
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <TouchableHighlight
        style={styles.listItem}
        onPress={this.rowPressed.bind(this, rowData.category, rowData.title)}
        underlayColor='#718586'
        key={rowData.id}>
        <Text style={styles.listText}>{rowData.title}</Text>
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

module.exports = CategoryList;