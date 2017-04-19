import React, { Component } from 'react';
import NavigationButton from '../navigation/NavigationButton';
import { navigatorPropTypes, songPropTypes } from '../../helpers/PropTypes';

export default class SongButton extends Component {
  static propTypes = {
    song: songPropTypes(),
    navigation: navigatorPropTypes()
  };

  render () {
    const { song } = this.props;
    return <NavigationButton text={`${song.id} ${song.title}`} onPress={this.handlePress} />;
  }

  handlePress = () => {
    const { song, navigation } = this.props;
    navigation.navigate('Song', {song});
  };
}