import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import config from '../../config';

const styles = StyleSheet.create({
  menuText: {
    fontSize: 18,
    color: config.colors.white,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  menuItem: {
    height: 40,
    backgroundColor: config.colors.green,
    borderColor: config.colors.greenlight,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center'
  }
});

export default class NavigationButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    return (
      <TouchableHighlight style={styles.menuItem} underlayColor='#73941f' onPress={this.handlePress}>
        <Text style={styles.menuText}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }

  handlePress = () => {
    this.props.navigation.navigate(this.props.path);
  };
}
