'use strict';

var React = require('react-native');
var SongList = require('./SongList');

var {
    StyleSheet,
    Component,
    View,
    Text,
    ListView,
    TouchableHighlight
    } = React;

var styles = StyleSheet.create({
    background: {
        backgroundColor: '#000000',
        paddingTop: 50,
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
    listText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    listItem: {
        height: 32,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000000',
        borderWidth: 0,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'flex-start'
    }
});

class CategoryList extends Component {

    constructor(props) {
        super(props);
        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.guid !== r2.guid
        });
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.categories)
        };
    }

    rowPressed(category, title) {
        var songs = this.props.songs.filter(song => song.category === category);
        this.props.navigator.push({
            title: title,
            component: SongList,
            passProps: {
                songs: songs
            }
        });
    }

    renderRow(rowData, sectionId, rowId) {
        return (
            <TouchableHighlight
                style={styles.listItem}
                onPress={this.rowPressed.bind(this, rowData.category, rowData.title)}
                underlayColor='#718586'
                key={rowData.id}>
                <Text style={styles.listText}>{rowData.title}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                style={styles.background} />
        );
    }
}

module.exports = CategoryList;