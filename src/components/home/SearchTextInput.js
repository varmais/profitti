import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import config from '../../config';

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

export default class SearchTextInput extends Component {
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
    console.log(nativeEvent);
  };
}
