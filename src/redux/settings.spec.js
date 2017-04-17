import reducer, {
  setK18SettingValue,
  SET_K18_SONGS
} from './settings';

const mockFetchSongs = 'fetch-songs';

jest.mock('./songs', () => ({
  fetchSongs: () => mockFetchSongs
}));

describe('redux:settings', () => {
  describe('reducer', () => {
    const initialState = {
      k18Enabled: false
    };

    test('has initial state', () => {
      expect(reducer()).toEqual(initialState)
    });

    test('on SET_K18_SONGS', () => {
      const state = initialState;
      const action = {type: SET_K18_SONGS, payload: true};
      const expectedState = {...state, k18Enabled: action.payload};
      expect(reducer(state, action)).toEqual(expectedState);
    });
  });

  describe('actions', () => {
    let dispatchStub;

    beforeEach(() => {
      dispatchStub = jest.fn();
    });

    describe('setK18SettingValue', () => {
      beforeEach(() => {
        const action = setK18SettingValue(true);
        action(dispatchStub);
      });

      test('dispatches SET_K18_SONGS with value', () => {
        expect(dispatchStub).toHaveBeenCalledWith({
          type: SET_K18_SONGS,
          payload: true
        });
      });

      test('fetches songs', () => {
        expect(dispatchStub).toHaveBeenCalledWith(mockFetchSongs);
      });
    });
  });
});
