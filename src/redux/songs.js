import config from '../config';

const FETCH_SONGS = 'profitti/songs/FETCH_SONGS';
const FETCH_SONGS_SUCCESS = 'profitti/songs/FETCH_SONGS_SUCCESS';
const FETCH_SONGS_FAIL = 'profitti/songs/FETCH_SONGS_FAIL';
const SEARCH_SONGS = 'profitti/songs/SEARCH_SONGS';
const SEARCH_SONGS_RESET = 'profitti/songs/SEARCH_SONGS_RESET';

export {
  FETCH_SONGS,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAIL,
  SEARCH_SONGS,
  SEARCH_SONGS_RESET
};

const initialState = {
  loading: false,
  songs: [],
  categories: [],
  searchResult: [],
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

function selectSongs (songs, searchString) {
  const string = searchString.toLowerCase();
  return songs.filter(s => (s.title.toLowerCase().includes(string) || s.lyrics.toLowerCase().includes(string)));
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        loading: true
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        songs: action.payload,
        categories: getCategories(action.payload)
      };
    case FETCH_SONGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case SEARCH_SONGS:
      return {
        ...state,
        searchResult: selectSongs(state.songs, action.payload)
      };
    case SEARCH_SONGS_RESET:
      return {
        ...state,
        searchResult: []
      };
    default:
      return state;
  }
}

export function fetchSongs () {
  return async (dispatch, getState) => {
    const state = getState();
    const { k18Enabled } = state.settings;
    const url = k18Enabled ? `${config.api.songs}?dirty=true` : config.api.songs;
    dispatch({type: FETCH_SONGS});
    try {
      const response = await fetch(url);
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

export function searchSongs (string) {
  return {
    type: SEARCH_SONGS,
    payload: string
  };
}

export function resetSearchSongs () {
  return {
    type: SEARCH_SONGS_RESET
  };
}
