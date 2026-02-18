import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer.jsx';
import LoginForm from '../components/organismes/loginForm.jsx';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logStatutsSelector } from '../store/reducers/userSlice';
import './Sign-in.css';

function SignIn() {
  const navigate = useNavigate();
  const isLogged = useSelector(logStatutsSelector);

  useEffect(() => {
    if (isLogged) {
      navigate('/user');
    }
  }, [isLogged, navigate]);

  
if(!isLogged){

  return (
      <>
        <title>Argent Bank - Sign In Page</title>
        <Header />
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle"></i>
            <h1>Sign In</h1>
            <LoginForm />
          </section>
        </main>
        <Footer />
      </>
    );
}
 return null;
}

export default SignIn;