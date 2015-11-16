'use strict';

var React = require('react-native');
var SearchViewButton = require('./SearchViewButton');
var MenuViewButton = require('./MenuViewButton');
var Categories = require('../data/songs').categories;
var Songs = require('../data/songs').songs;
var MenuItems = require('../data/menu');
var styles = require('../modules/styles');
var DataService = require('../modules/DataService');
var {
  Component,
  View,
  Text,
  ScrollView,
  StyleSheet,
  PixelRatio,
  AsyncStorage
  } = React;

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      categories: [],
      menuItems: MenuItems,
      searchString: ''
    };

    this.getSongs();
  }

  getSongs() {
    if (this.props.device !== 'ios') {
      this.setState({
        songs: Songs,
        categories: Categories
      });
    } else {
      DataService.getData().then(data => {
        this.setState(data);
      });
    }
  }

  render() {
    var views = [];
    this.state.menuItems.forEach((item, index) => {
      if (item.id === 'SearchView') {
        views.push(<SearchViewButton
          navigator={this.props.navigator}
          songs={this.state.songs}
          item={item}
          key={index}
          device={this.props.device} />);
      } else {
        views.push(<MenuViewButton
          navigator={this.props.navigator}
          item={item}
          categories={this.state.categories}
          key={index}
          device={this.props.device} />);
      }
    });

    return (
      <ScrollView style={styles.background} bounces={false}>
        <View style={[styles.container, styles.alignCenter]}>
          <Text style={styles.mainTitle}>Laulukirja Profitti</Text>
          <Text style={[styles.subtitle, styles.smallMarginBottom]}>Tradenomiopiskelijaliitto TROL ry</Text>
        </View>
        <View style={styles.container}>
          {views.map((view) => view)}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Dashboard;