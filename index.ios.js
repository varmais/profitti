import Dashboard from './src/components/Dashboard';
import NavigationBarRouteMapper from './src/components/NavigationBarRouteMapper';
import React, {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Component,
  Navigator
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: 'black',
    height: 60,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: 'white',
    paddingBottom: 20
  }
});

class Profitti extends Component {

  renderScene(route, nav) {
    return <route.component navigator={nav} {...route.passProps} />
  }

  renderNavigationBar() {
    return <Navigator.NavigationBar routeMapper={NavigationBarRouteMapper} style={styles.navBar}/>;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
            title: 'Profitti',
            component: Dashboard
        }}
        renderScene={this.renderScene}
        navigationBar={this.renderNavigationBar()}
        />
    );
  }
}

AppRegistry.registerComponent('Profitti', () => Profitti);
