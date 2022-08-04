import { configureStore } from '@reduxjs/toolkit';
import { FooterFlowersSlice } from './reducers/FooterFlowers';
import { ModalSlice } from './reducers/Modal';

export const store = configureStore({
  devTools: true,
  reducer: {
    footerState: FooterFlowersSlice.reducer,
    modalState: ModalSlice.reducer
  },

  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;