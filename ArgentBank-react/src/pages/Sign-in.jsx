import Header from '../components/molecules/header.jsx';
import Footer from '../components/molecules/footer.jsx';
import Form from '../components/organismes/form.jsx';
import './Sign-in.css';

function SignIn() {
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

export default SignIn;