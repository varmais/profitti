import { PixelRatio, StyleSheet } from 'react-native';
import config from '../config';

export default StyleSheet.create({
  header: {
    backgroundColor: config.colors.black
  },
  background: {
    padding: 8,
    backgroundColor: config.colors.grayLight
  },
  container: {
    marginBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: config.colors.white,
    borderColor: config.colors.grayMid,
    borderWidth: 1,
    borderRadius: 4
  },
  titleContainer: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: config.colors.graySubtle
  },
  title: {
    color: config.colors.blackLight,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    alignSelf: 'flex-start'
  },
  text: {
    fontSize: 16,
    color: config.colors.blackLight,
    marginBottom: 16
  },
  textTight: {
    marginBottom: 0
  }
});