import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import styles from '../helpers/Styles';
import config from '../config';

export default class SongScreen extends Component {
  static navigationOptions = {
    header: ({state}) => ({
      style: styles.header,
      tintColor: config.colors.green,
      title: state.params.song.title
    })
  };

  // TODO: this is nuts..
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          song: PropTypes.shape({
            title: PropTypes.string.isRequired,
            lyrics: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  render () {
    const { song } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
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