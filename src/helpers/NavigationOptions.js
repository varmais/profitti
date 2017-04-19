import config from '../config';
import AppStyles from './Styles';

export function createHeader (title = '') {
  return {
    style: AppStyles.header,
    tintColor: config.colors.white,
    title
  };
}