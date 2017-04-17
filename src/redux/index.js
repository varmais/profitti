import { combineReducers } from 'redux';
import settings from './settings';
import songs from './songs'

export default combineReducers({
  settings,
  songs
});