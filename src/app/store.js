import { configureStore } from '@reduxjs/toolkit';
import { HotReducer, IceReducer } from '../features';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hot: HotReducer,
    ice: IceReducer
  },
});
