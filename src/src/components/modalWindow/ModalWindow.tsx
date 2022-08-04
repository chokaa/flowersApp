import React from 'react';
import './ModalWindow.scss';
import { useAppSelector } from '../../state/Hooks';
import { getModalType } from '../../state/reducers/ModalSlice';
import { ModalType } from '../../types/Modal';
import { Login } from '../login/Login';
import { Register } from '../register/Register';
import { Profile } from '../profile/Profile';

export const ModalWindow: React.FC = () => {
    const modalType: ModalType = useAppSelector(getModalType);

    const renderSwitch = (param: ModalType) => {
      switch(param) {
        case ModalType.Login:
          return <Login></Login>;
        case ModalType.Register:
          return <Register></Register>;
        case ModalType.Profile:
          return <Profile></Profile>;
        default:
          return <div>Missing modal</div>;
      }
    }

    return (
    <div className="modal-window">
      {renderSwitch(modalType)}
    </div>
    )
}