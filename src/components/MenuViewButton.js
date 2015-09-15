'use strict';

var React = require('react-native');

var {
    Component,
    TouchableHighlight,
    StyleSheet,
    Text
} = React;

var styles = StyleSheet.create({
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
    }
});

class MenuViewButton extends Component {

    constructor(props) {
        super(props)
    }

    navigate(option) {
        var item = this.props.menuItems.filter(item => item.id === option)[0];

        if (item.id === 'CategoryList') {
            this.props.navigator.push({
                title: item.title,
                component: item.component,
                passProps: {
                    categories: this.props.categories,
                    songs: this.props.songs
                }
            });
        } else {
            this.props.navigator.push({
                title: item.title,
                component: item.component
            });
        }
    }

    render() {
        return (
            <TouchableHighlight
                style={styles.menuItem}
                //onPress={this.navigate.bind(this, item.id)}
                underlayColor='#73941f'
                key={this.props.item.id}>
                <Text style={styles.menuText}>{this.props.item.title}</Text>
            </TouchableHighlight>
        );
    }
}

module.exports = MenuViewButton;