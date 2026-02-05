import React, { useState } from 'react';
import './user.css';
import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer.jsx';
import Account from '../components/organismes/account.jsx';
import UserForm from '../components/organismes/userForm.jsx';
import { useSelector } from 'react-redux';
import { authStatusSelector } from '../store/reducers/userReducer/userReducer.js';

function User() {
  const isLoggedIn = useSelector(authStatusSelector);
  const [showForm, setShowForm] = useState(false);
  const userName = useSelector((state) => state.user.userProfile?.userName);

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitClick = () => {
    setShowForm(false);
  };

  return (
    <>
      <title>Argent Bank - User Page</title>
      <Header active="user" userName={userName} />
      <main className="main bg-dark">
        <div className="header">
          {!isLoggedIn ? null : ( 
          <h1>Welcome back<br />{userName}</h1>
          )}
          {showForm ? null : (
          <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
          )}
          {showForm && (
            <UserForm onClose={handleCloseForm} onSubmit={handleSubmitClick} />
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