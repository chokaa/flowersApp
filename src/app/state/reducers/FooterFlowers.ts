import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { Flower } from '../../types/Flower';
import { RootState, store } from '../Store';

export interface FooterState {
  flowers: Array<Flower>;
}

const initialState: FooterState = {
  flowers: [],
};

export const FooterFlowersSlice: any = createSlice({
  name: 'footerFlowerState',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFlower: (state: FooterState, action: PayloadAction<Flower>) => {
      state.flowers.push(action.payload)
    },
    removeFlower: (state: FooterState, action: PayloadAction<any>) => {
      state.flowers.splice(action.payload, 1)
    },
  },
});

export const { addFlower, removeFlower } = FooterFlowersSlice.actions;
export const selectFlowers = (state: RootState) => (<any>state.FooterFlowersSlice).flowers;

export default FooterFlowersSlice;