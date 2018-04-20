import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './index';

function configureStore(persistentReducer, initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(persistentReducer, initialState, enhancer);
}

const persistConfig = {key: 'profitti-root', storage, debug: true};
const persistedReducer = persistReducer(persistConfig, reducer);
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
const store = configureStore(persistedReducer, {});
const persistor = persistStore(store);

export { store, persistor };
