import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/Hooks';
import './Profile.scss';
import { logOut, getToken } from '../../state/reducers/UserSlice';
import { closeModal } from '../../state/reducers/ModalSlice';
import TextField from '@mui/material/TextField';

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(getToken);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onLogOut = () => {
    dispatch(logOut())
    dispatch(closeModal())
  }

  useEffect(() => {  
    
    fetch('https://flowrspot-api.herokuapp.com/api/v1/users/me', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(response => response.json())
      .then(data => {
        setFirstName(data.user.first_name)
        setLastName(data.user.last_name)
      })
  }, []);

  return (
    <div className="profile">
      <div className="user-info">{firstName}</div>
      <div className="user-info">{lastName}</div>
      <div className="logout" onClick={onLogOut}>LOGOUT</div>
    
    </div>
  )
}