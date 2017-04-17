import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import SearchTextInput from './home/SearchTextInput';
import NavigationButton from './home/NavigationButton';
import config from '../config';
import { fetchSongs } from '../redux/songs';

const styles = StyleSheet.create({
  header: {
    backgroundColor: config.colors.black
  },
  background: {
    backgroundColor: config.colors.black
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    color: config.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16
  },
  container: {
    paddingHorizontal: 32
  }
});

@connect((state) => ({}), {
  fetchSongs
})
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: {
      style: styles.header
    }
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    fetchSongs: PropTypes.func.isRequired
  };

  componentDidMount () {
    this.props.fetchSongs();
  }

  render () {
    return (
      <ScrollView style={styles.background} bounces={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Laulukirja Profitti</Text>
          <Text style={[styles.title, styles.subtitle]}>Tradenomiopiskelijaliitto TROL ry</Text>
        </View>
        <View style={styles.container}>
          <SearchTextInput navigation={this.props.navigation}/>
          {this.renderNavigationButton('Laulut', 'CategoryList')}
          {this.renderNavigationButton('Ohjeita', 'Instructions')}
          {this.renderNavigationButton('Profitti', 'ProfittiInfo')}
          {this.renderNavigationButton('TROL ry', 'TrolInfo')}
        </View>
      </ScrollView>
    );
  }

  renderNavigationButton (title, path) {
    return <NavigationButton title={title} path={path} navigation={this.props.navigation} />;
  }
}