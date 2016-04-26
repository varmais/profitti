import React, {
  Component,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
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

export default class MenuViewButton extends Component {

  constructor(props) {
    super(props);
  }

  _navigate(item) {
    if (item.id === 'CategoryList') {
      this.props.navigator.push({
        title: item.title,
        component: item.component,
        passProps: {
          categories: this.props.categories,
          device: this.props.device
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
        onPress={this._navigate.bind(this, this.props.item)}
        underlayColor='#73941f'
        key={this.props.item.id}>
        <Text style={styles.menuText}>{this.props.item.title}</Text>
      </TouchableHighlight>
    );
  }
}
