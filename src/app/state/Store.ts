import { configureStore } from '@reduxjs/toolkit';
import { FooterFlowersSlice } from './reducers/FooterFlowers';

export const store = configureStore({
  devTools: true,
  preloadedState: {
    FooterFlowersSlice: {
      flowers: []
    }
  },
  reducer: {
    FooterFlowersSlice: FooterFlowersSlice.reducer,
  },
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;