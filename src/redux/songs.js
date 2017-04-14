import config from '../config';

const FETCH_SONGS_SUCCESS = 'profitti/songs/FETCH_SONGS_SUCCESS';
const FETCH_SONGS_FAIL = 'profitti/songs/FETCH_SONGS_FAIL';

const initialState = {
  songs: [],
  categories: [],
  error: null
};

function getCategories (songs) {
  return songs.map(s => ({
    id: s.category_id,
    name: s.category_name
  })).reduce((acc, next) => {
    const containsCategory = acc.find(category => category.id === next.id);
    if (!containsCategory) {
      acc.push(next);
    }
    return acc;
  }, []);
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        error: null,
        songs: action.payload,
        categories: getCategories(action.payload)
      };
    case FETCH_SONGS_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export function fetchSongs () {
  return async (dispatch) => {
    try {
      const response = await fetch(config.api.songs);
      const songs = await response.json();
      dispatch({
        type: FETCH_SONGS_SUCCESS,
        payload: songs
      });
    } catch (error) {
      dispatch({
        type: FETCH_SONGS_FAIL,
        error
      });
    }
  };
}