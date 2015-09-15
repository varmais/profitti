'use strict';

var React = require('react-native');
var {
    Component,
    View,
    Text,
    TouchableHighlight,
    ScrollView,
    TextInput,
    StyleSheet
} = React;

var styles = StyleSheet.create({
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

class SearchViewButton extends Component {

    constructor(props) {
        super(props);
    }


    updateSearchString(event) {
        this.setState({
            searchString: event.nativeEvent.text
        });
    }

    searchLyrics() {
        var songs;
        var searchString = this.state.searchString;

        if (searchString.length === 0) {
            return;
        }

        songs = this.state.songs.filter(item => item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

        this.props.navigator.push({
            title: 'Haku: ' + this.state.searchString,
            component: LyricsListPage,
            passProps: {
                items: songs
            }
        });
    }

    render() {
        return (
            <TextInput
                style={styles.searchInput}
                placeholder='Hae lauluja'
                placeholderTextColor='#ffffff'
                autoCorrect={false}
                //onChange={this.updateSearchString.bind(this)}
                returnKeyType='search'
                //onSubmitEditing={this.searchLyrics.bind(this)}
                key={this.props.item.id}/>
        );
    }
}

module.exports = SearchViewButton;

