'use strict';

var React = require('react-native');

var SearchViewButton = require('./SearchViewButton');
var MenuViewButton = require('./MenuViewButton');

var Categories = require('../data/songs').categories;
var Songs = require('../data/songs').songs;
var MenuItems = require('../data/menu');

var {
  Component,
  View,
  Text,
  ScrollView,
  StyleSheet,
  PixelRatio
  } = React;

var styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    paddingTop: 70,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    marginBottom: 60,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 15,
    color: '#ffffff'
  }
});

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: Songs,
      categories: Categories,
      menuItems: MenuItems,
      searchString: ''
    };
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
        <View style={styles.container}>
          <Text style={styles.title}>Laulukirja Profitti</Text>
          <Text style={styles.subtitle}>Tradenomiopiskelijaliitto TROL ry</Text>
        </View>
        <View style={styles.container}>
          {views.map((view) => view)}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Dashboard;