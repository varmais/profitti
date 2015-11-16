'use strict';
var React = require('react-native');
var AsyncStorage = React.AsyncStorage;
var url = 'http://proffi.herokuapp.com/';
var DATA_KEY = 'profitti_songs_data';

module.exports = {
  getData() {
    return AsyncStorage.getItem(DATA_KEY).then(songData => {
      if (songData) {
        return JSON.parse(songData);
      } else {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            AsyncStorage.setItem(DATA_KEY, JSON.stringify(data));
            return data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  },

  updateData() {
    AsyncStorage.removeItem(DATA_KEY).then(() => {
      this.getData();
    });
  }
};