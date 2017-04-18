import React from 'react';
import { TabNavigator, TabView } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import config from './config';
import SongNavigator from './SongNavigator';
import SettingsNavigator from './SettingsNavigator';

const AppNavigator = TabNavigator({
  Songs: {screen: SongNavigator},
  Settings: {screen: SettingsNavigator}
}, {
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: config.colors.black,
    inactiveTintColor: config.colors.gray,
    showLabel: false
  }
});

export default () => (
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
);