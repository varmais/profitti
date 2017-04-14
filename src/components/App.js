import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import HomeScreen from './HomeScreen';
import CategoryListScreen from './CategoryListScreen';
import InstructionsScreen from './InstructionsScreen';
import ProfittiInfoScreen from './ProfittiInfoScreen';
import TrolInfoScreen from './TrolInfoScreen';
import SongListScreen from './SongListScreen';
import SongScreen from './SongScreen';
import store from '../redux/createStore';

const AppNavigator = StackNavigator({
  Index: {screen: HomeScreen},
  CategoryList: {screen: CategoryListScreen},
  Instructions: {screen: InstructionsScreen},
  ProfittiInfo: {screen: ProfittiInfoScreen},
  TrolInfo: {screen: TrolInfoScreen},
  SongList: {screen: SongListScreen},
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