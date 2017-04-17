import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import HomeScreen from './containers/HomeScreen';
import CategoryListScreen from './containers/CategoryListScreen';
import InstructionsScreen from './containers/InstructionsScreen';
import ProfittiInfoScreen from './containers/ProfittiInfoScreen';
import TrolInfoScreen from './containers/TrolInfoScreen';
import SongListScreen from './containers/SongListScreen';
import SongScreen from './containers/SongScreen';
import SongSearchScreen from './containers/SongSearchScreen'
import store from './redux/createStore';

const AppNavigator = StackNavigator({
  Index: {screen: HomeScreen},
  CategoryList: {screen: CategoryListScreen},
  Instructions: {screen: InstructionsScreen},
  ProfittiInfo: {screen: ProfittiInfoScreen},
  TrolInfo: {screen: TrolInfoScreen},
  SongList: {screen: SongListScreen},
  SongSearch: {screen: SongSearchScreen},
  Song: {screen: SongScreen}
}, {
  initialRouteName: 'Index',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
});

export default () => (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
);