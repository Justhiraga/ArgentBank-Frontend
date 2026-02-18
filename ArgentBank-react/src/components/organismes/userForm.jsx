import './userForm.css'
import { userNameChange } from '../../store/actions/userNameAction';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


export default function UserInfoForm() {

  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const token = useSelector((state) => state.user.token);


  const [userName, setUserName] = useState(userProfile?.userName || '');

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userNameChange( token, userName ));
  };
  


  return (
    <form className="editForm" >
      <div className="editFormInput">
        <div className='labelinput'>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={handleChange}
            placeholder={userProfile?.userName}
            id='username'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="firstname">First Name:</label>
          <input
             type="text"
              placeholder={userProfile?.firstName}
              id='firstname'
          />
        </div>
        <div className='labelinput'>
          <label htmlFor="lastname">Last Name:</label>
          <input
             type="text"
              placeholder={userProfile?.lastName}
              id='lastname'
          />
        </div>
      </div>
      <div className="editFormbutton">
        <button type="submit" onClick={handleSubmit} >Save</button>
        <button type="cancel" >Cancel</button>
      </div>
    </form>
  );
}