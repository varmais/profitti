import React, { Component, PropTypes } from 'react';
import NavigationButton from '../navigation/NavigationButton';

export default class CategoryButton extends Component {
  static propTypes = {
    category: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  render () {
    const { category } = this.props;
    return <NavigationButton text={category.name} onPress={this.handlePress} />;
  }

  handlePress = () => {
    const { category, navigation } = this.props;
    navigation.navigate('SongList', {category});
  };
}