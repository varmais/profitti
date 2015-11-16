'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Dimensions = require('Dimensions');
var styles = require('../modules/styles');
var {
  StyleSheet,
  Component,
  View,
  Text,
  ScrollView,
  PixelRatio
  } = React;

class Song extends Component {

  constructor(props) {
    super(props);
    var index = this.props.songs.findIndex(it => it.id === this.props.id);
    this.state = {
      index: index
    };
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        horizontal={true}
        loop={false}
        index={this.state.index}
        showsPagination={false}>

        {this.props.songs.map(item => {
          return (
            <ScrollView style={styles.background} key={item.id}>
              <View style={styles.container}>
                <Text style={[styles.title, styles.smallMarginBottom]}>{item.title}</Text>
                <View style={styles.separator}/>
                <Text style={[styles.text, styles.marginBottom]}>{item.lyrics}</Text>
              </View>
            </ScrollView>
          );
        })}
      </Swiper>
    );
  }
}

module.exports = Song;
