import React, {
  Component
} from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MAIcons from 'react-native-vector-icons/MaterialIcons';
import InstructionsScreen from './containers/InstructionsScreen';
import ProfittiInfoScreen from './containers/ProfittiInfoScreen';
import TrolInfoScreen from './containers/TrolInfoScreen';
import SettingsScreen from './containers/SettingsScreen';

const Navigator = StackNavigator({
  Index: {screen: SettingsScreen},
  Instructions: {screen: InstructionsScreen},
  ProfittiInfo: {screen: ProfittiInfoScreen},
  TrolInfo: {screen: TrolInfoScreen}
}, {
  initialRouteName: 'Index',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
});

export default class SettingsNavigator extends Component {
  static navigationOptions = {
    tabBar: () => ({
      icon: ({tintColor}) => (<MAIcons name="settings" size={32} color={tintColor} />)
    })
  };

  render () {
    return <Navigator/>;
  }
}
