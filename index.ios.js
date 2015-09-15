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

var Profitti = React.createClass({
    render: function() {
        return (
            <React.NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Profitti',
                    component: Dashboard
                }} />
        );
    }
});

AppRegistry.registerComponent('Profitti', () => Profitti);
