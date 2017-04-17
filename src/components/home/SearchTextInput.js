import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import config from '../../config';
import { searchSongs } from '../../redux/songs';

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginTop: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: config.colors.green,
    borderRadius: 8,
    color: config.colors.white,
    fontSize: 18
  }
});

@connect(null, {
  searchSongs
})
export default class SearchTextInput extends Component {
  static propTypes = {
    searchSongs: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    return (
      <TextInput
        style={styles.input}
        placeholder='Hae lauluja..'
        placeholderTextColor={config.colors.white}
        autoCorrect={false}
        returnKeyType='search'
        onSubmitEditing={this.handleSubmit}
      />
    );
  }

  handleSubmit = ({nativeEvent}) => {
    this.props.searchSongs(nativeEvent.text);
    this.props.navigation.navigate('SongSearch', {searchString: nativeEvent.text});
  };
}
