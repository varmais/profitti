import reducer, {
  setK18SettingValue,
  SET_K18_SONGS,
  __RewireAPI__ as settingsAPI
} from './settings';

describe('redux:settings', () => {
  describe('reducer', () => {
    const initialState = {
      k18Enabled: false
    };

    it('has initial state', () => {
      expect(reducer()).to.eql(initialState)
    });

    it('on SET_K18_SONGS', () => {
      const state = initialState;
      const action = {type: SET_K18_SONGS, payload: true};
      const expectedState = {...state, k18Enabled: action.payload};
      expect(reducer(state, action)).to.eql(expectedState);
    });
  });

  describe('actions', () => {
    const fetchedSongs = 'fetchSongs return value';
    let dispatchStub;

    beforeEach(() => {
      dispatchStub = sinon.stub();
      settingsAPI.__Rewire__('fetchSongs', () => fetchedSongs);
    });

    describe('setK18SettingValue', () => {
      beforeEach(() => {
        const action = setK18SettingValue(true);
        action(dispatchStub);
      });

      it('dispatches SET_K18_SONGS with value', () => {
        expect(dispatchStub).to.have.been.calledWithExactly({
          type: SET_K18_SONGS,
          payload: true
        });
      });

      it('fetches songs', () => {
        expect(dispatchStub).to.have.been.calledWithExactly(fetchedSongs);
      });
    });
  });
});
