import { PixelRatio, StyleSheet } from 'react-native';
import config from '../config';

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
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: config.colors.white,
    borderColor: config.colors.grayMid,
    borderWidth: 1,
    borderRadius: 4
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