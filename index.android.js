'use strict';

var React = require('react-native');
var Dashboard = require('./src/components/Dashboard');
var {
    AppRegistry,
    StyleSheet
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Profitti extends React.Component {

    renderScene(route, nav) {
        return <route.component navigator={nav} {...route.passProps} />
    }

    render() {
        return (
            <React.Navigator
                ref={this._setNavigatorRef}
                style={styles.container}
                initialRoute={{
                    title: 'Profitti',
                    component: Dashboard
                }}
                renderScene={this.renderScene}
                />
        );
    }
};

AppRegistry.registerComponent('Profitti', () => Profitti);
