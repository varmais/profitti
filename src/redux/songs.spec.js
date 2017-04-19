import reducer, {
  fetchSongs,
  searchSongs,
  resetSearchSongs,
  FETCH_SONGS,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAIL,
  SEARCH_SONGS,
  SEARCH_SONGS_RESET
} from './songs';
import config from '../config';

describe('redux:songs', () => {
  describe('reducer', () => {
    const initialState = {
      loading: false,
      songs: [],
      categories: [],
      searchResult: [],
      error: null
    };

    it('has initial state', () => {
      expect(reducer()).to.eql(initialState);
    });

    it('on FETCH_SONGS', () => {
      const state = initialState;
      const action = {type: FETCH_SONGS};
      const expectedState = {...state, loading: true};
      expect(reducer(state, action)).to.eql(expectedState);
    });

    it('on FETCH_SONGS_SUCCESS', () => {
      const state = {...initialState, error: new Error('error'), loading: true};
      const songs = [
        {id: 1, category_id: 1, category_name: 'one'},
        {id: 2, category_id: 2, category_name: 'two'},
        {id: 3, category_id: 2, category_name: 'two'}
      ];
      const action = {type: FETCH_SONGS_SUCCESS, payload: songs};
      const expectedCategories = [{id: 1, name: 'one'}, {id: 2, name: 'two'}];
      const expectState = {...state, error: null, songs, categories: expectedCategories, loading: false};
      expect(reducer(state, action)).to.eql(expectState);
    });

    it('on FETCH_SONGS_FAIL', () => {
      const state = {...initialState, loading: true};
      const error = new Error('error');
      const action = {type: FETCH_SONGS_FAIL, error};
      const expectedState = {...state, error, loading: false};
      expect(reducer(state, action)).to.eql(expectedState);
    });
    
    it('on SEARCH_SONGS', () => {
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
      expect(reducer(state, action)).to.eql(expectedState);
    });

    it('on SEARCH_SONGS_RESET', () => {
      const state = {...initialState, searchResult: ['not', 'empty']};
      const action = {type: SEARCH_SONGS_RESET};
      const expectedState = {...state, searchResult: []};
      expect(reducer(state, action)).to.eql(expectedState);
    });
  });

  describe('actions', () => {
    let dispatchStub;
    let getStateStub;
    let fetchStub;
    const mockSongs = [{song: 1}];

    beforeEach(() => {
      fetchStub = sinon.stub().returnsPromise();
      dispatchStub = sinon.stub();
      getStateStub = sinon.stub();
      global.fetch = fetchStub;
    });

    describe('fetchSongs', () => {
      describe('when k18 is disabled', () => {
        describe('and fetch succeeds', () => {
          beforeEach(async () => {
            fetchStub.resolves({json: () => new Promise((resolve) => resolve(mockSongs))});
            getStateStub.returns({settings: {k18Enabled: false}});
            const action = fetchSongs();
            await action(dispatchStub, getStateStub);
          });

          it('dispatches songs loading start', () => {
            expect(dispatchStub).to.have.been.calledWithExactly({
              type: FETCH_SONGS
            });
          });

          it('fetches with correct url', () => {
            expect(global.fetch).to.have.been.calledWithExactly(config.api.songs);
          });

          it('dispatches songs', () => {
            expect(dispatchStub).to.have.been.calledWithExactly({
              type: FETCH_SONGS_SUCCESS,
              payload: mockSongs
            });
          });
        });

        describe('and fetch fails', () => {
          const error = new Error('fetch fail');

          beforeEach(async () => {
            fetchStub.rejects(error);
            getStateStub.returns({settings: {k18Enabled: false}});
            const action = fetchSongs();
            await action(dispatchStub, getStateStub);
          });

          it('fetches with correct url', () => {
            expect(global.fetch).to.have.been.calledWithExactly(config.api.songs);
          });

          it('dispatches error', () => {
            expect(dispatchStub).to.have.been.calledWithExactly({
              type: FETCH_SONGS_FAIL,
              error
            });
          });
        });

        describe('when k18 is enabled', () => {
          beforeEach(async () => {
            fetchStub.resolves({json: () => new Promise((resolve) => resolve(mockSongs))});
            getStateStub.returns({settings: {k18Enabled: true}});
            const action = fetchSongs();
            await action(dispatchStub, getStateStub);
          });

          it('fetches with correct url', () => {
            expect(global.fetch).to.have.been.calledWithExactly(`${config.api.songs}?dirty=true`);
          });

          it('dispatches songs', () => {
            expect(dispatchStub).to.have.been.calledWithExactly({
              type: FETCH_SONGS_SUCCESS,
              payload: mockSongs
            });
          });
        });
      });
    });

    describe('searchSongs', () => {
      const string = 'searchString';
      expect(searchSongs(string)).to.eql({
        type: SEARCH_SONGS,
        payload: string
      });
    });

    describe('resetSearchSongs', () => {
      expect(resetSearchSongs()).to.eql({
        type: SEARCH_SONGS_RESET
      });
    });
  });
});
