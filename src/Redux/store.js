import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers'; // Import your rootReducer

const persistConfig = {
  key: 'root',
  storage,
  // You can also configure blacklist or whitelist options if needed
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(/* your middleware here, e.g., redux-thunk */));
const persistor = persistStore(store);

export { store, persistor };
