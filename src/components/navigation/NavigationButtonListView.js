import React, { Component, PropTypes } from 'react';
import { ListView, Text, View } from 'react-native';
import { navigatorPropTypes } from '../../helpers/PropTypes';
import Separator from '../common/Separator';
import AppStyles from '../../helpers/Styles';

export default class NavigationButtonListView extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    navigation: navigatorPropTypes(),
    renderRow: PropTypes.func.isRequired
  };

  dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.guid !== r2.guid
  });

  render () {
    const { items, title, renderRow } = this.props;
    return (
      <View style={AppStyles.container}>
        <View style={AppStyles.titleContainer}>
          <Text style={AppStyles.title}>
            {title}
          </Text>
        </View>
        <ListView
          dataSource={this.dataSource.cloneWithRows(items)}
          renderRow={renderRow}
          renderSeparator={() => <Separator />}
          removeClippedSubviews={false}
          {...this.props}
        />
      </View>
    );
  }
}
