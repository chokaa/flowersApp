import React from 'react';
import './Login.scss';
import { ModalType } from '../../types/Modal';
import { useAppSelector, useAppDispatch } from '../../state/Hooks';
import { getModalType, setModalType } from '../../state/reducers/Modal';

export const Login: React.FC = () => {

    const modalType: ModalType = useAppSelector(getModalType);
    const dispatch = useAppDispatch();
    //test
    const openProfile = () => {
      dispatch(setModalType(ModalType.Profile))
    }

    return (
      <div className="login">
      
        <h1>LOGIN COMPONENT</h1>

        <div className='profile' onClick={openProfile}></div>

      </div>
    )
}