import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from '../helpers/Styles';
import { navigatorPropTypes, songPropTypes } from '../helpers/PropTypes';
import { createHeader } from '../helpers/NavigationOptions';

export default class SongScreen extends Component {
  static navigationOptions = ({navigation}) => createHeader(navigation.state.params.song.title);

  static propTypes = {
    navigation: navigatorPropTypes({
      song: songPropTypes()
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
          <Text style={styles.text}>
            {song.lyrics}
          </Text>
        </View>
      </ScrollView>
    );
  }
}