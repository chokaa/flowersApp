import { UserSlice } from './reducers/UserSlice';
import { configureStore } from '@reduxjs/toolkit';
import { FooterFlowersSlice } from './reducers/FooterFlowersSlice';
import { ModalSlice } from './reducers/ModalSlice';

export const store = configureStore({
  devTools: true,
  reducer: {
    footerState: FooterFlowersSlice.reducer,
    modalState: ModalSlice.reducer,
    userState: UserSlice.reducer,
  },

  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;