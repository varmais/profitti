import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Touchable from '../common/Touchable';
import config from '../../config';

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: config.colors.white,
    borderWidth: 0,
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'flex-start',
    color: config.colors.blackLight,
    fontSize: 18
  },
  textWithIcon: {

  },
  arrow: {
    position: 'absolute',
    right: 0,
    bottom: -4 / PixelRatio.get()
  }
});

export default class NavigationButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired
  };

  render () {
    const { onPress } = this.props;
    return (
      <Touchable style={styles.button} onPress={onPress} underlayColor={config.colors.gray}>
        <View>
          {this.renderIcon()}
          {this.renderText()}
          <Icon name="ios-arrow-forward" size={24} style={styles.arrow} />
        </View>
      </Touchable>
    );
  }

  renderIcon () {
    const { icon } = this.props;
    if (icon) {
      return <View/>
    }
  }

  renderText () {
    const { icon, text } = this.props;
    const textStyles = [styles.text];
    if (icon) {
      textStyles.push(textStyles.textWithIcon);
    }
    return (
      <Text style={textStyles}>
        {text}
      </Text>
    );
  }
}