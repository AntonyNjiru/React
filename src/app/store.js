import { configureStore } from '@reduxjs/toolkit';
import {campsitesReducer} from '../features/campsites/CampsitesSlice';
import { userReducer } from './userSlice';

const store = configureStore({
  reducer: {
      user: userReducer,
      counter: campsitesReducer,
  }
});