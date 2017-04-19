import React, { Component } from 'react';
import NavigationButton from '../navigation/NavigationButton';
import { navigatorPropTypes, categoryPropTypes } from '../../helpers/PropTypes';

export default class CategoryButton extends Component {
  static propTypes = {
    category: categoryPropTypes(),
    navigation: navigatorPropTypes()
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