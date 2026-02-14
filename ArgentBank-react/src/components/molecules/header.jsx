import './header.css'
import Logo from '../atoms/logo.jsx'
import logoImg from '../../assets/img/argentBankLogo.png'
import LogoutBtn from '../atoms/logoutBtn.jsx';
import { NavLink } from "react-router";
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Header() {

    const userProfile = useSelector((state) => state.user.userProfile);
    const userName = useState(userProfile.userName)


  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo main-nav-logo-image">
        <Logo img={logoImg} />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
          <NavLink to="/sign-in" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userName ? userName : 'Sign In'}
          </NavLink>
        <LogoutBtn />
      </div>
    </nav>
  );
}

export default Header;