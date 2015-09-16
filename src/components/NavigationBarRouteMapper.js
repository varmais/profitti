'use strict';

var React = require('react-native');
var {
    PixelRatio,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} = React;

var styles = StyleSheet.create({
    navBarText: {
        fontSize: 16,
        marginVertical: 5
    },
    navBarTitleText: {
        color: 'white',
        fontWeight: '500',
        marginVertical: 5
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: 'white'
    }
});

module.exports = {
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {previousRoute.title}
                </Text>
            </TouchableOpacity>
        );
    },

    RightButton: function(route, navigator, index, navState) {
        return (<View />);
    },

    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    }
};