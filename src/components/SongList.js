'use strict';

var React = require('react-native');
var Song = require('./Song');

var {
  StyleSheet,
  Component,
  View,
  Text,
  ListView,
  TouchableHighlight
  } = React;

var styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    marginBottom: 5
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 15,
    color: '#ffffff'
  },
  listText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  listItem: {
    height: 32,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    borderWidth: 0,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'flex-start'
  }
});

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
    this.props.navigator.push({
      title: '',
      component: Song,
      passProps: {
        songs: this.props.songs,
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
          style={styles.container}/>
      </View>
    );
  }
}

module.exports = SongList;