'use strict';

var React = require('react-native');
var Dashboard = require('./src/components/Dashboard');
var NavigationBarRouteMapper = require('./src/components/NavigationBarRouteMapper');
var {
  AppRegistry,
  StyleSheet
  } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: 'black'
  }
});

class Profitti extends React.Component {

  renderScene(route, nav) {
    return <route.component navigator={nav} {...route.passProps} />
  }

  render() {
    return (
      <React.Navigator
        style={styles.container}
        initialRoute={{
                    title: 'Profitti',
                    component: Dashboard,
                    device: 'ios'
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
