export enum ModalType {
  Login,
  Register,
  Profile,
}

export interface ModalState {
  isModalOpen: boolean;
  modalSelected?: ModalType;
}