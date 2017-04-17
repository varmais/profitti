import React, { Component, PropTypes } from 'react';
import NavigationButton from '../navigation/NavigationButton';

export default class CategoryButton extends Component {
  static propTypes = {
    song: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
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