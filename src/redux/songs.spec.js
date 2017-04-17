import reducer, {
  fetchSongs,
  searchSongs,
  resetSearchSongs,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAIL,
  SEARCH_SONGS,
  SEARCH_SONGS_RESET
} from './songs';
import config from '../config';

describe('redux:songs', () => {
  describe('reducer', () => {
    const initialState = {
      songs: [],
      categories: [],
      searchResult: [],
      error: null
    };

    test('has initial state', () => {
      expect(reducer()).toEqual(initialState);
    });

    test('on FETCH_SONGS_SUCCESS', () => {
      const state = {...initialState, error: new Error('error')};
      const songs = [
        {id: 1, category_id: 1, category_name: 'one'},
        {id: 2, category_id: 2, category_name: 'two'},
        {id: 3, category_id: 2, category_name: 'two'}
      ];
      const action = {type: FETCH_SONGS_SUCCESS, payload: songs};
      const expectedCategories = [{id: 1, name: 'one'}, {id: 2, name: 'two'}];
      const expectState = {...state, error: null, songs, categories: expectedCategories};
      expect(reducer(state, action)).toEqual(expectState);
    });

    test('on FETCH_SONGS_FAIL', () => {
      const state = initialState;
      const error = new Error('error');
      const action = {type: FETCH_SONGS_FAIL, error};
      const expectedState = {...state, error};
      expect(reducer(state, action)).toEqual(expectedState);
    });
    
    test('on SEARCH_SONGS', () => {
      const searchString = 'song1';
      const songs = [
        {title: `${searchString} title`, lyrics: `${searchString} lyrics`},
        {title: `${searchString.toUpperCase()} title`, lyrics: `song2 lyrics`},
        {title: `song3 title`, lyrics: `song3 lyrics`},
        {title: `song4 title`, lyrics: `${searchString} lyrics`},
      ];
      const state = {...initialState, songs};
      const action = {type: SEARCH_SONGS, payload: 'song1'};
      const expectedSongs = [
        {title: `${searchString} title`, lyrics: `${searchString} lyrics`},
        {title: `${searchString.toUpperCase()} title`, lyrics: `song2 lyrics`},
        {title: `song4 title`, lyrics: `${searchString} lyrics`}
      ];
      const expectedState = {...state, searchResult: expectedSongs};
      expect(reducer(state, action)).toEqual(expectedState);
    });

    test('on SEARCH_SONGS_RESET', () => {
      const state = {...initialState, searchResult: ['not', 'empty']};
      const action = {type: SEARCH_SONGS_RESET};
      const expectedState = {...state, searchResult: []};
      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('actions', () => {
    let dispatchStub;
    let getStateStub;
    const mockSongs = [{song: 1}];

    beforeEach(() => {
      dispatchStub = jest.fn();
    });

    describe('fetchSongs', () => {
      describe('when k18 is disabled', () => {
        describe('and fetch succeeds', () => {
          beforeEach(async () => {
            global.fetch = jest.fn().mockImplementation(() => {
              return new Promise((resolve) => resolve({json: () => new Promise((resolve) => resolve(mockSongs))}));
            });
            getStateStub = jest.fn().mockImplementation(() => ({settings: {k18Enabled: false}}));
            const action = fetchSongs();
            await action(dispatchStub, getStateStub);
          });

          test('fetches with correct url', () => {
            expect(global.fetch).toHaveBeenCalledWith(config.api.songs);
          });

          test('dispatches songs', () => {
            expect(dispatchStub).toHaveBeenCalledWith({
              type: FETCH_SONGS_SUCCESS,
              payload: mockSongs
            });
          });
        });

        describe('and fetch fails', () => {
          const error = new Error('fetch fail');

          beforeEach(async () => {
            global.fetch = jest.fn().mockImplementation(() => {
              return new Promise((resolve, reject) => reject(error));
            });
            getStateStub = jest.fn().mockImplementation(() => ({settings: {k18Enabled: false}}));
            const action = fetchSongs();
            await action(dispatchStub, getStateStub);
          });

          test('fetches with correct url', () => {
            expect(global.fetch).toHaveBeenCalledWith(config.api.songs);
          });

          test('dispatches error', () => {
            expect(dispatchStub).toHaveBeenCalledWith({
              type: FETCH_SONGS_FAIL,
              error
            });
          });
        });

        describe('when k18 is enabled', () => {
          beforeEach(async () => {
            global.fetch = jest.fn().mockImplementation(() => {
              return new Promise((resolve) => resolve({json: () => new Promise((resolve) => resolve(mockSongs))}));
            });
            getStateStub = jest.fn().mockImplementation(() => ({settings: {k18Enabled: true}}));
            const action = fetchSongs();
            await action(dispatchStub, getStateStub);
          });

          test('fetches with correct url', () => {
            expect(global.fetch).toHaveBeenCalledWith(`${config.api.songs}?dirty=true`);
          });

          test('dispatches songs', () => {
            expect(dispatchStub).toHaveBeenCalledWith({
              type: FETCH_SONGS_SUCCESS,
              payload: mockSongs
            });
          });
        });
      });
    });

    describe('searchSongs', () => {
      const string = 'searchString';
      expect(searchSongs(string)).toEqual({
        type: SEARCH_SONGS,
        payload: string
      });
    });

    describe('resetSearchSongs', () => {
      expect(resetSearchSongs()).toEqual({
        type: SEARCH_SONGS_RESET
      });
    });
  });
});
