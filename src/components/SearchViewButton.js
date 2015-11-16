'use strict';

var React = require('react-native');
var SongList = require('./SongList');
var styles = require('../modules/styles');
var {
  Component,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TextInput,
  StyleSheet
  } = React;

class SearchViewButton extends Component {

  constructor(props) {
    super(props);
  }


  updateSearchString(event) {
    this.setState({
      searchString: event.nativeEvent.text
    });
  }

  searchLyrics() {
    var songs;
    var searchString = this.state.searchString;

    if (searchString.length === 0) {
      return;
    }

    songs = this.props.songs.filter(item => item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

    this.props.navigator.push({
      title: 'Haku: ' + this.state.searchString,
      component: SongList,
      passProps: {
        songs: songs,
        device: this.props.device
      }
    });
  }

  render() {
    return (
      <TextInput
        style={styles.searchInput}
        placeholder='Hae lauluja..'
        placeholderTextColor='#ffffff'
        autoCorrect={false}
        onChange={this.updateSearchString.bind(this)}
        returnKeyType='search'
        onSubmitEditing={this.searchLyrics.bind(this)}
        key={this.props.item.id}/>
    );
  }
}

module.exports = SearchViewButton;

