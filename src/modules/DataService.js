import React, {
  AsyncStorage
} from 'react-native';
var url = 'http://proffi.herokuapp.com/';
var DATA_KEY = 'profitti_songs_data';

export default {
  async getData() {
    const data = await AsyncStorage.getItem(DATA_KEY);
    if (data) {
      console.log('Data available from AsyncStorage');
      return JSON.parse(data);
    }
    console.log('Fetching new data..');

    const dataResponse = await this.fetchData();
    if (dataResponse) {
      await AsyncStorage.setItem(DATA_KEY, JSON.stringify(dataResponse));
      console.log('Got response, saving new data.');
      return dataResponse;
    }
    return {};
  },

  async fetchData() {
    return await fetch(url).then(response => response.json());
  },

  async updateData() {
    console.log('Remove old data.');
    await AsyncStorage.removeItem(DATA_KEY);
    return this.getData();
  }
};