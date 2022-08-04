import React from 'react';
import Modal from '@mui/material/Modal';
import './Header.scss';
import { useAppSelector, useAppDispatch } from '../../state/Hooks';
import {
  Link
} from "react-router-dom";
import { isModalOpen, openModal, closeModal, setModalType } from '../../state/reducers/ModalSlice';
import { ModalWindow } from '../modalWindow/ModalWindow';
import { ModalType } from '../../types/Modal';
import { isLoggedIn, logOut } from '../../state/reducers/UserSlice';

export const Header: React.FC = () => {
  const isOpen = useAppSelector(isModalOpen);
  const isUserLoggedIn = useAppSelector(isLoggedIn);
  const dispatch = useAppDispatch();

  const openLogin = () => {
    dispatch(openModal())
    dispatch(setModalType(ModalType.Login))
  }

  const onLogOut = () => {
    dispatch(logOut())
  }

  const openRegister = () => {
    dispatch(openModal())
    dispatch(setModalType(ModalType.Register))
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <div className="header">
      <img className="logo" src={'/static/images/logo.png'}/>
      <div className="navigation">
        <Link to="/">Flowers</Link>
        <Link to="/sightseeing">Latest Sightseeing</Link>
        <Link to="/favorites">Favorites</Link>
        { !isUserLoggedIn ? <div className="login-button" onClick={openLogin}>Login</div> : <div className="login-button" onClick={onLogOut}>Logout</div> }
        <div className="register-button" onClick={openRegister}>New Account</div>
      </div>

      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <ModalWindow></ModalWindow>
      </Modal>
    </div>
  )
}