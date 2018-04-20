import React, {
  Component
} from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MAIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './containers/HomeScreen';
import SongListScreen from './containers/SongListScreen';
import SongScreen from './containers/SongScreen';
import SongSearchScreen from './containers/SongSearchScreen'

const Navigator = StackNavigator({
  Index: {screen: HomeScreen},
  SongList: {screen: SongListScreen},
  SongSearch: {screen: SongSearchScreen},
  Song: {screen: SongScreen}
}, {
  initialRouteName: 'Index',
  headerMode: Platform.OS === 'ios' ? 'float' : 'screen'
});

export default class SongNavigator extends Component {
  static navigationOptions = ({navigation}) => ({
    tabBarIcon: ({tintColor}) => (<MAIcons name="queue-music" size={32} color={tintColor} />)
  });

  render () {
    return <Navigator/>;
  }
}