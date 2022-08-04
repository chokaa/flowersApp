import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './Register.scss';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useAppDispatch } from '../../state/Hooks';
import { setModalType } from '../../state/reducers/ModalSlice';
import { ModalType } from '../../types/Modal';
import { logIn } from '../../state/reducers/UserSlice';

export const Register: React.FC = () => {

  const dispatch = useAppDispatch();
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setErrorVisible] = useState(false)
  const [dateOfBirth, setDateOfBirth] = useState(new Date())
  const handleSubmit = (event: any) => {
    event.preventDefault();

    fetch('https://flowrspot-api.herokuapp.com/api/v1/users/register', {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: event.target.elements.email.value,
              password: event.target.elements.password.value,
              first_name: event.target.elements.firstName.value,
              last_name: event.target.elements.lastName.value,
              date_of_birth: event.target.elements.dateOfBirth.value,
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
      <div className="register">
        <div className="register-header">Create an Account</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input"> <TextField name="firstName" label="First Name" variant="outlined"/> </div>
            <div className="input"> <TextField name="lastName" label="Last Name" variant="outlined"/> </div>
            <div className="input"> 
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={dateOfBirth}
                  onChange={(event: any) => { 
                    setDateOfBirth(event)
                  }}
                  renderInput={(params: any) => <TextField name="dateOfBirth" {...params} />}

                />
              </LocalizationProvider>
            </div>
            <div className="input"> <TextField name="email" label="Email Address" variant="outlined"/> </div>
            <div className="input"> <TextField name="password" label="Password" variant="outlined" type="password"/> </div>
            
            
            <div className="button-container">
              <input type="submit" value="Create account" />
            </div>
          </form>
        </div>
      { showError && <div>{errorMsg}</div>}
      </div>
    )
  
}