import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tvReducer from '../features/tv/tvSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
     tv:tvReducer
  },
});

//redux toolkit mein combine kr skte hai reducers ekk category ke