import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { onLogout } from "../../store/actions/loginAction";
import { useSelector } from "react-redux";


const LogoutBtn = () =>{

    const isLogged = useSelector((state) => state.user.isLogged);
    const dispatch = useDispatch()
    const handdleLogout = () => {dispatch(onLogout())}

    return (
        <>
        {isLogged &&
        <NavLink to="/" onClick={handdleLogout}>
            Sing-out
        </NavLink>
        }
        </>
    ) 
}


export default LogoutBtn