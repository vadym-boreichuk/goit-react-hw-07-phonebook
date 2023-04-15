import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
