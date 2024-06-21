"use client";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import movieDetailsReducer from '../redux/movieDetailsSlice'

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
    moviedetails: movieDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
