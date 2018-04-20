import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Provider } from 'react-redux';
import { store, persistor }from './redux/createStore';
import { PersistGate } from 'redux-persist/integration/react'
import config from './config';
import SongNavigator from './SongNavigator';
import SettingsNavigator from './SettingsNavigator';

const AppNavigator = TabNavigator({
  Songs: {screen: SongNavigator},
  Settings: {screen: SettingsNavigator}
}, {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  backBehavior: 'none',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: config.colors.black,
    inactiveTintColor: config.colors.gray,
    showLabel: false
  }
});

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}