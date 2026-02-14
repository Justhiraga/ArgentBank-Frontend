import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userInfoPorfile } from '../../store/reducers/userReducer.js';
import './userForm.css'





export default function UserForm( {onClose} ) {

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  const [userName, setUserName] = useState(userProfile.userName);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () =>{
    dispatch(userInfoPorfile(
      userProfile.userName
    ));
    onClose();
  }

  return (
    <form className="editForm">
      <div className="editFormInput">
        <div className='labelinput'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            placeholder={userProfile.userName}
            id='username'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            placeholder={userProfile.firstName}
            id='firstname'
            readOnly
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            placeholder={userProfile.lastName}
            id='lastname'
            readOnly
          />
        </div>
      </div>
      <div className="editFormbutton">
        <button type="submit" >Save</button>
        <button type="cancel" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}