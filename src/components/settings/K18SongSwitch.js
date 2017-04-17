import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import config from '../../config';
import { setK18SettingValue } from '../../redux/settings';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: config.colors.white,
    borderWidth: 0,
    justifyContent: 'center'
  },
  text: {
    color: config.colors.blackLight,
    fontSize: 18
  },
  switch: {
    position: 'absolute',
    right: 0,
    bottom: 27 / PixelRatio.get()
  }
});

export class K18SongSwitch extends Component {
  static propTypes = {
    k18Enabled: PropTypes.bool.isRequired,
    handleValueChange: PropTypes.func.isRequired
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>K18-laulut</Text>
        <Switch
          onTintColor={config.colors.green}
          tintColor={config.colors.greenlight}
          onValueChange={this.props.handleValueChange}
          value={this.props.k18Enabled}
          style={styles.switch}
        />
      </View>
    )
  }
}

export default connect((state) => ({
  k18Enabled: state.settings.k18Enabled
}), {
  handleValueChange: setK18SettingValue
})(K18SongSwitch);
