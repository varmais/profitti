'use strict';

var React = require('react-native');
var styles = require('../modules/styles');
var {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  } = React;

module.exports = {
  LeftButton: function (route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={styles.navBarText}>
          <Text style={styles.arrow}>&lsaquo;</Text> {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function (route, navigator, index, navState) {
    return (<View />);
  },

  Title: function (route, navigator, index, navState) {
    return (<View />);
  }
};