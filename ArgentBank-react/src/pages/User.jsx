import './user.css'
import Header from '../components/molecules/header.jsx'
import Footer from '../components/molecules/footer.jsx'
import Account from '../components/organismes/account.jsx';
import { useSelector } from 'react-redux';
import { authStatusSelector } from '../store/reducers/userReducer/userReducer.js';

function User() {
    const isLoggedIn = useSelector(authStatusSelector);
    if (isLoggedIn !== true) {
        window.location.href = '/sign-in';
    }
    else {
        return (
            <>
                <title>Argent Bank - User Page</title>
                <Header active={"main-nav-item"} />
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="edit-button">Edit Name</button>
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
}

export default User;