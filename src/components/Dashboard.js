'use strict';

var React = require('react-native');
var MenuItems = require('../data/menu');
var SearchViewButton = require('./SearchViewButton');
var MenuViewButton = require('./MenuViewButton');

var {
    Component,
    View,
    Text,
    ScrollView,
    StyleSheet
} = React;

var styles = StyleSheet.create({
    background: {
        backgroundColor: '#000000',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    container: {
        marginBottom: 40,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    subtitle: {
        fontSize: 15,
        color: '#ffffff'
    },
    menuText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    menuItem: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#9EB741',
        borderColor: '#B7C83B',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 25,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    searchInput: {
        height: 36,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#9EB741',
        borderRadius: 8,
        marginBottom: 25,
        color: '#ffffff'
    }
});

class Dashboard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        var views = [];

        MenuItems.forEach((item) => {
            if (item.id === 'SearchView') {
                views.push(<SearchViewButton item={item} />);
            } else {
                views.push(<MenuViewButton
                                item={item}
                                //menuItems={this.state.menuItems}
                                //categories={this.state.categories}
                                //songs={this.state.songs}
                    />);
            }
        });

        return (
            <ScrollView style={styles.background} bounces={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>Laulukirja Profitti</Text>
                    <Text style={styles.subtitle}>Tradenomiopiskelijaliitto TROL ry</Text>
                </View>
                <View style={styles.container}>
                    {views.map((view) => view)}
                </View>
            </ScrollView>
        );
    }
}

module.exports = Dashboard;