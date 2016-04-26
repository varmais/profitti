import {
  StyleSheet,
  PixelRatio,
} from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    paddingTop: 20,
    marginBottom: 60
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20
  },
  smallTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: '#ffffff'
  },

  smallMarginBottom: {
    marginBottom: 5
  },
  marginBottom: {
    marginBottom: 20
  },
  alignCenter: {
    alignItems: 'center'
  },

  textSeparator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#ffffff'
  },

  mainTitle: {
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
  },

  lastContainer: {
    marginBottom: 80
  },

  navBarText: {
    fontSize: 20,
    color: '#9EB741'
  },
  navBarLeftButton: {
    paddingLeft: 10
  },
  arrow: {
    fontSize: 24
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
  },

  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#ffffff',
    marginBottom: 15
  }
});