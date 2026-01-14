import './header.css'
import Logo from '../atoms/logo.jsx'
import logoImg from '../../assets/img/argentBankLogo.png'


export default function Header() {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo main-nav-logo-image">
                <Logo img={logoImg}/>
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a href="#" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    );
}