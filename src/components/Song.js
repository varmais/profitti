'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper');

var {
    StyleSheet,
    Component,
    View,
    Text,
    ScrollView,
    PixelRatio
    } = React;

var Dimensions = require('Dimensions');

var styles = StyleSheet.create({
    background: {
        backgroundColor: '#000000',
        paddingLeft: 20,
        paddingRight: 20,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    container: {
        paddingTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        color: '#ffffff',
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        color: '#ffffff',
        marginBottom: 20
    },
    separator: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#ffffff',
        marginBottom: 15
    }
});

class Song extends Component {

    constructor(props) {
        super(props);
        var item = this.props.items.filter(item => item.id === this.props.id)[0];
        var index = this.props.items.findIndex(it => it.id === item.id);
        this.state = {
            items: this.props.items,
            index: index
        };
    }

    render() {
        return (
            <Swiper
                style={styles.wrapper}
                horizontal={true}
                loop={false}
                index={this.state.index}
                showsPagination={false}>

                {this.state.items.map(item => {
                    return (
                        <ScrollView style={styles.background} key={item.id}>
                            <View style={styles.container}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.separator} />
                                <Text style={styles.text}>{item.lyrics}</Text>
                            </View>
                        </ScrollView>
                    );
                })}
            </Swiper>
        );
    }
}

module.exports = Song;
