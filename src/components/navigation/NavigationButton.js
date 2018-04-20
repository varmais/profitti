import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Touchable from '../common/Touchable';
import config from '../../config';

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: config.colors.white,
    borderWidth: 0,
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    left: 0,
    bottom: Platform.OS === 'ios' ? 40 / PixelRatio.get() : 70 / PixelRatio.get()
  },
  text: {
    color: config.colors.blackLight,
    fontSize: 18
  },
  textWithIcon: {
    paddingLeft: 32
  },
  arrow: {
    position: 'absolute',
    right: 0,
    bottom: Platform.OS === 'ios' ? 30 / PixelRatio.get() : 50 / PixelRatio.get()
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
      <Touchable onPress={onPress} underlayColor={config.colors.gray}>
        <View style={styles.button}>
          {this.renderText()}
          {this.renderIcon()}
          <IonIcon name="ios-arrow-forward" size={24} style={styles.arrow} />
        </View>
      </Touchable>
    );
  }

  renderIcon () {
    const { icon } = this.props;
    if (icon) {
      return <FAIcon name={icon} size={18} style={styles.icon} />;
    }
  }

  renderText () {
    const { icon, text } = this.props;
    const textStyles = [styles.text];
    if (icon) {
      textStyles.push(styles.textWithIcon);
    }
    return (
      <Text style={textStyles}>
        {text}
      </Text>
    );
  }
}