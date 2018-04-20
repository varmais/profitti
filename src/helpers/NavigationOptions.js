import config from '../config';

export function createHeader (title = '') {
  return {
    headerStyle: {
      backgroundColor: config.colors.black
    },
    headerTintColor: config.colors.white,
    title
  };
}