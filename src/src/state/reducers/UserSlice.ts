import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { UserState } from '../../types/User';

const initialState: UserState = {
  isLoggedIn: false,
};

export const UserSlice: any = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logIn: (state: UserState, action: PayloadAction<{ token: string }>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token
    },
    logOut: (state: UserState) => {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export const { logIn, logOut } = UserSlice.actions;
export const isLoggedIn = (state: RootState) =>(<any>state.userState).isLoggedIn;
export const getToken = (state: RootState) =>(<any>state.userState).token;

export default UserSlice;