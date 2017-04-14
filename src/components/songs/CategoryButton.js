import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import config from '../../config';

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: config.colors.black,
    borderWidth: 0,
    marginBottom: 8,
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    color: config.colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default class CategoryButton extends Component {
  static propTypes = {
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  render () {
    const { category } = this.props;
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={this.handlePress}
        underlayColor={config.colors.gray}>
        <Text style={styles.text}>
          {category.name}
        </Text>
      </TouchableHighlight>
    );
  }

  handlePress = () => {
    const { category, navigation } = this.props;
    navigation.navigate('SongList', {category});
  };
}