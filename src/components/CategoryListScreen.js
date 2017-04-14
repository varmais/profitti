import React, { Component, PropTypes } from 'react';
import {
  ListView,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import config from '../config';
import Styles from '../helpers/Styles';
import CategoryButton from './songs/CategoryButton';

const styles = StyleSheet.create({
  container: {
    backgroundColor: config.colors.black,
    padding: 16,
    flex: 1
  }
});

@connect(state => ({
  categories: state.songs.categories
}))
export default class CategoryListScreen extends Component {
  static navigationOptions = {
    header: {
      style: Styles.header,
      tintColor: config.colors.green,
      title: 'Laulut'
    }
  };

  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.categories)
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <CategoryButton category={rowData} navigation={navigation} />}
        />
      </View>
    );
  }
}
