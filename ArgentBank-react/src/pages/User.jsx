import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logStatutsSelector } from '../store/reducers/userSlice';
import { useNavigate } from 'react-router';
import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer.jsx';
import Account from '../components/organismes/account.jsx';
import UserInfoForm from '../components/organismes/userForm.jsx';
import './user.css';



function User() {

  const navigate = useNavigate();
  const isLogged = useSelector(logStatutsSelector);
  const userName = useSelector((state) => state.user.userProfile?.userName);

  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    if (!isLogged) {
      navigate('/sign-in');
    }
  }, [isLogged, navigate]);  

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };




  return (
    <>
      <title>Argent Bank - User Page</title>
      <Header userName={userName}/>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br /> {userName} </h1>
          {showForm ? null :(
          <button className="edit-button" onClick={openForm}>Edit Name</button>
          )}
          {showForm && (
            <UserInfoForm closeForm={closeForm} />
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