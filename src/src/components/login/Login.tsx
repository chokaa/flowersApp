import React, { FormEvent, useState } from 'react';
import './Login.scss';
import { ModalType } from '../../types/Modal';
import { useAppDispatch } from '../../state/Hooks';
import { setModalType } from '../../state/reducers/ModalSlice';
import TextField from '@mui/material/TextField';
import { logIn } from '../../state/reducers/UserSlice';

export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const [errorMsg, setErrorMsg] = useState('')
    const [showError, setErrorVisible] = useState(false)
    const handleSubmit = (event: any) => {
      event.preventDefault();
      fetch('https://flowrspot-api.herokuapp.com/api/v1/users/login', {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: event.target.elements.email.value,
          password: event.target.elements.password.value,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorVisible(true)
          setErrorMsg(data.error)
        }
        else {
          dispatch(setModalType(ModalType.Profile))
          dispatch(logIn({ token: data.auth_token }))
        }
      })
      .catch((err) => {
        setErrorVisible(true)
      });
    };


    return (
      <div className="login">
        <div className="login-header">Welcome back</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input"> <TextField name="email" label="Email Address" variant="outlined"/> </div>
            <div className="input"> <TextField name="password" label="Password" variant="outlined" type="password"/> </div>
            <div className="button-container">
              <input type="submit" value="Login to your Account" />
            </div>
          </form>
        </div>
        { showError && <div className="login-error">{errorMsg}</div>}
      </div>
    )
}