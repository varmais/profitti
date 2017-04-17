import { fetchSongs } from './songs';

const SET_K18_SONGS = 'profitti/settings/SET_K18_SONGS';

export {
  SET_K18_SONGS
};

const initialState = {
  k18Enabled: false
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_K18_SONGS:
      return {
        ...state,
        k18Enabled: action.payload
      };
    default:
      return state;
  }
}

export function setK18SettingValue (value) {
  return (dispatch) => {
    dispatch({
      type: SET_K18_SONGS,
      payload: value
    });
    dispatch(fetchSongs());
  };
}
