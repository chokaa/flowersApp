import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { ModalState, ModalType } from '../../types/Modal';

const initialState: ModalState = {
  isModalOpen: false,
};

export const ModalSlice: any = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state: ModalState) => {
      state.isModalOpen = true;
    },
    closeModal: (state: ModalState) => {
      state.isModalOpen = false;
    },
    setModalType: (state: ModalState, action: PayloadAction<ModalType>) => {
      state.modalSelected = action.payload
    },
  },
});

export const { openModal, closeModal, setModalType } = ModalSlice.actions;
export const isModalOpen = (state: RootState) =>(<any>state.modalState).isModalOpen;
export const getModalType = (state: RootState) =>(<any>state.modalState).modalSelected;

export default ModalSlice;