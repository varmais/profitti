import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import HeaderLogo from '../components/common/HeaderLogo';
import AppStyles from '../helpers/Styles';
import NavigationButton from '../components/navigation/NavigationButton';
import Separator from '../components/common/Separator';
import { navigatorPropTypes } from '../helpers/PropTypes';
import K18SongSwitch from '../components/settings/K18SongSwitch';
import UpdateSongsButton from '../components/settings/UpdateSongsButton';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderLogo />,
    headerStyle: AppStyles.header
  };

  static propTypes = {
    navigation: navigatorPropTypes()
  };

  render () {
    return (
      <ScrollView style={AppStyles.background}>
        <View style={AppStyles.container}>
          <UpdateSongsButton />
          <K18SongSwitch />
        </View>
        <View style={[AppStyles.container, AppStyles.containerLast]}>
          <NavigationButton text="Ohjeita" onPress={this.navigate('Instructions')} icon="cutlery" />
          <Separator/>
          <NavigationButton text="Laulukirja Profitti" onPress={this.navigate('ProfittiInfo')} icon="book" />
          <Separator/>
          <NavigationButton text="Tradenomiopiskelijaliitto TROL ry" onPress={this.navigate('TrolInfo')} icon="info-circle" />
        </View>
      </ScrollView>
    );
  }

  navigate = (screen) => {
    return () => {
      this.props.navigation.navigate(screen);
    };
  };
}
