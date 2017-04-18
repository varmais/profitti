import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import styles from '../helpers/Styles';
import { navigatorPropTypes } from '../helpers/PropTypes';
import config from '../config';

export default class SongScreen extends Component {
  static navigationOptions = {
    header: ({state}) => ({
      style: styles.header,
      tintColor: config.colors.white,
      title: state.params.song.title
    })
  };

  static propTypes = {
    navigation: navigatorPropTypes({
      song: PropTypes.shape({
        title: PropTypes.string.isRequired,
        lyrics: PropTypes.string.isRequired
      })
    })
  };

  render () {
    const { song } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.background}>
        <View style={[styles.container, styles.containerLast]}>
          <Text style={[styles.text, styles.title]}>
            {song.title}
          </Text>
          <View style={styles.separator}/>
          <Text style={styles.text}>
            {song.lyrics}
          </Text>
        </View>
      </ScrollView>
    );
  }
}