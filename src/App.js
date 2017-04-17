import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import HomeScreen from './containers/HomeScreen';
import CategoryListScreen from './containers/CategoryListScreen';
import InstructionsScreen from './containers/InstructionsScreen';
import ProfittiInfoScreen from './containers/ProfittiInfoScreen';
import TrolInfoScreen from './containers/TrolInfoScreen';
import SongListScreen from './containers/SongListScreen';
import SongScreen from './containers/SongScreen';
import SongSearchScreen from './containers/SongSearchScreen'
import SettingsScreen from './containers/SettingsScreen';
import store from './redux/createStore';
import config from './config';

const SongNavigator = StackNavigator({
  Index: {screen: HomeScreen},
  CategoryList: {screen: CategoryListScreen},
  SongList: {screen: SongListScreen},
  SongSearch: {screen: SongSearchScreen},
  Song: {screen: SongScreen}
}, {
  initialRouteName: 'Index',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
});

const SettingsNavigator = StackNavigator({
  Index: {screen: SettingsScreen},
  Instructions: {screen: InstructionsScreen},
  ProfittiInfo: {screen: ProfittiInfoScreen},
  TrolInfo: {screen: TrolInfoScreen}
}, {
  initialRouteName: 'Index',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
});

const AppNavigator = TabNavigator({
  Songs: {
    screen: SongNavigator,
  },
  Settings: {
    screen: SettingsNavigator,
  },
}, {
  tabBarOptions: {
    activeTintColor: config.colors.green,
  }
});


export default () => (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
);