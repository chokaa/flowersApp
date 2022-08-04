import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { Flower } from '../../types/Flower';
import { RootState } from '../Store';

export interface FooterState {
  flowers: Array<Flower>;
}

const initialState: FooterState = {
  flowers: [],
};

export const FooterFlowersSlice: any = createSlice({
  name: 'footerFlowersSlice',
  initialState,
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
export const selectFlowers = (state: RootState) =>(<any>state.footerState).flowers;

export default FooterFlowersSlice;