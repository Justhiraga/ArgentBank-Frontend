import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { onLogout } from "../../store/actions/loginAction";


const LogoutBtn = () =>{

    const dispatch = useDispatch()
    const handdleLogout = () => {dispatch(onLogout())}

    return (
        <>
        <NavLink to="/" onClick={handdleLogout}>
            Sing-out
        </NavLink>
        </>
    ) 
}


export default LogoutBtn