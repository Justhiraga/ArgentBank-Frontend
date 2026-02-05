import './userForm.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userUpdateProfile } from '../../store/reducers/userReducer/userReducer.js';

export default function UserForm({ onClose }) {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(userUpdateProfile({
      userName: name,
      firstName: firstName,
      lastName: lastName,
    }));
    onClose();
  };

  return (
    <form className="editForm">
      <div className="editFormInput">
        <div className='labelinput'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder={userProfile?.userName}
            id='username'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder={userProfile?.firstName}
            id='firstname'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder={userProfile?.lastName}
            id='lastname'
          />
        </div>
      </div>
      <div className="editFormbutton">
        <button type="submit" onClick={handleSubmit}>Save</button>
        <button type="cancel" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}