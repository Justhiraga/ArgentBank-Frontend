import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authStatusSelector } from '../store/reducers/userReducer/userReducer.js';
import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer.jsx';
import Form from '../components/organismes/form.jsx';
import './Sign-in.css';

function SignIn() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authStatusSelector);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return (
      <>
        <title>Argent Bank - Sign In Page</title>
        <Header />
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle"></i>
            <h1>Sign In</h1>
            <Form />
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return null;
}

export default SignIn;