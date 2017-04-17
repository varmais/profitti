import React, { Component, PropTypes } from 'react';
import {
  PixelRatio,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import SearchTextInput from '../components/home/SearchTextInput';
import CategoryButton from '../components/songs/CategoryButton';
import Separator from '../components/common/Separator';
import HeaderLogo from '../components/common/HeaderLogo';
import config from '../config';
import { fetchSongs } from '../redux/songs';

const styles = StyleSheet.create({
  header: {
    backgroundColor: config.colors.black
  },
  background: {
    padding: 8,
    backgroundColor: config.colors.grayLight
  },
  titleContainer: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: config.colors.graySubtle
  },
  title: {
    color: config.colors.blackLight,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    alignSelf: 'flex-start'
  },
  subtitle: {
    fontSize: 16
  },
  container: {
    marginBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: config.colors.white,
    borderColor: config.colors.grayMid,
    borderWidth: 1,
    borderRadius: 4
  }
});

@connect((state) => ({
  categories: state.songs.categories
}), {
  fetchSongs
})
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: () => ({
      style: styles.header,
      title: <HeaderLogo />
    })
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    fetchSongs: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired
  };

  dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1.guid !== r2.guid
  });

  componentDidMount () {
    this.props.fetchSongs();
  }

  render () {
    const { navigation, categories } = this.props;
    return (
      <ScrollView style={styles.background}>
        <View>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Haku</Text>
            </View>
            <SearchTextInput navigation={navigation}/>
          </View>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Kategoriat</Text>
            </View>
            <ListView
              enableEmptySections
              dataSource={this.dataSource.cloneWithRows(categories)}
              renderRow={rowData => <CategoryButton category={rowData} navigation={navigation} />}
              renderSeparator={() => <Separator />}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}