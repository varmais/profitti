import React from 'react';
import { PixelRatio, StyleSheet, View } from 'react-native';
import config from '../../config';

const styles = StyleSheet.create({
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: config.colors.graySubtle
  }
});

export default () => (
  <View style={styles.separator} />
);
