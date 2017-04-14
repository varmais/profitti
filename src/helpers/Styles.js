import { PixelRatio, StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#000',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#fff'
  },
  background: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  container: {
    marginTop: 16,
    marginBottom: 32
  },
  title: {
    fontSize: 20
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 16
  },
  textTight: {
    marginBottom: 0
  },
  separator: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#fff',
    marginBottom: 16
  }
});