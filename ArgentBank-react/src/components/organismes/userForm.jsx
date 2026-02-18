import './userForm.css'
import { userProfile } from '../../store/reducers/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


export default function UserInfoForm() {

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  const [userName, setUserName] = useState(userProfile.userName);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  


  return (
    <form className="editForm">
      <div className="editFormInput">
        <div className='labelinput'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={handleChange}
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
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="lastname">Last Name:</label>
          <input
             type="text"
              placeholder={userProfile.lastName}
              id='lastname'
          />
        </div>
      </div>
      <div className="editFormbutton">
        <button type="submit" >Save</button>
        <button type="cancel" >Cancel</button>
      </div>
    </form>
  );
}