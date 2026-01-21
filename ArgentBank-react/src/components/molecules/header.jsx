import './header.css'
import Logo from '../atoms/logo.jsx'
import logoImg from '../../assets/img/argentBankLogo.png'


import { NavLink } from "react-router";


export default function Header( {active}) {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo main-nav-logo-image">
                <Logo img={logoImg}/>
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/sign-in" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
                <NavLink to="/" className={active ? "main-nav-item" : "singout-hidden"}>
                    <i className="fa fa-sign-out"></i>
                    Sign Out
                </NavLink>
            </div>
        </nav>
    );
}