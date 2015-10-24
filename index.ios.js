'use strict';

var React = require('react-native');
var Dashboard = require('./src/components/Dashboard');
var NavigationBarRouteMapper = require('./src/components/NavigationBarRouteMapper');
var {
  AppRegistry,
  StyleSheet,
  PixelRatio
  } = React;

var styles = StyleSheet.create({
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

class Profitti extends React.Component {

  renderScene(route, nav) {
    return <route.component navigator={nav} {...route.passProps} device='ios' />
  }

  render() {
    return (
      <React.Navigator
        style={styles.container}
        initialRoute={{
                    title: 'Profitti',
                    component: Dashboard
                }}
        renderScene={this.renderScene}
        navigationBar={
                    <React.Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                    />
                }
        />
    );
  }
}

AppRegistry.registerComponent('Profitti', () => Profitti);
