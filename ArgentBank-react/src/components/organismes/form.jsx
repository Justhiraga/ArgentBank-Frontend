import { NavLink } from "react-router";
import Input from '../molecules/input.jsx';


export default function Form() {



    return (
        <form>
            <Input />
            <NavLink to="/user" className="sign-in-button">Sign In</NavLink>
            <p> 
                <a href="#">Forgot my password</a>
            </p>
        </form>
    );
}