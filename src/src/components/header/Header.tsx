import React from 'react';
import Modal from '@mui/material/Modal';
import './Header.scss';
import { useAppSelector, useAppDispatch } from '../../state/Hooks';
import {
  Link
} from "react-router-dom";
import { isModalOpen, openModal, closeModal, setModalType } from '../../state/reducers/Modal';
import { ModalWindow } from '../modalWindow/ModalWindow';
import { ModalType } from '../../types/Modal';

export const Header: React.FC = () => {
  const isOpen = useAppSelector(isModalOpen);
  const dispatch = useAppDispatch();

  const openLogin = () => {
    dispatch(openModal())
    dispatch(setModalType(ModalType.Login))
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
      <Link to="/">Flowers</Link>
      <Link to="/sightseeing">Latest Sightseeing</Link>
      <Link to="/favorites">Favorites</Link>
      <button onClick={openLogin}>Login</button>
      <button onClick={openRegister}>New Account</button>

      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <ModalWindow></ModalWindow>
      </Modal>

    </div>
  )
}