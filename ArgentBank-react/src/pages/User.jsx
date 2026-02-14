import { useState } from 'react';
import { useSelector } from 'react-redux';
import { logStatutsSelector } from '../store/reducers/userReducer.js';

import './user.css';
import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer.jsx';
import Account from '../components/organismes/account.jsx';
import UserForm from '../components/organismes/userForm.jsx';








function User() {

  const isLogged = useSelector(logStatutsSelector);
  const userProfile = useSelector((state) => state.user.userProfile);
  const userName = useState(userProfile.userName);

  const [showForm, setShowForm] = useState(false);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };



  return (
    <>
      <title>Argent Bank - User Page</title>
      <Header />
      <main className="main bg-dark">
        <div className="header"> 
          {!isLogged ? null :(
            <h1>Welcome back<br /> {userName} </h1>
          )}
          {showForm ? null :(
            <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          )}
          {showForm && (
            <UserForm onClose={handleCloseClick} />
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
        <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
        <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
      </main>
      <Footer />
    </>
  );
}

export default User;