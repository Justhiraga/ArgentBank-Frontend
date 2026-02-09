import { NavLink  } from "react-router";
import { onLogout } from "../../store/actions/userActions"
import { useDispatch } from "react-redux";


const LogoutBtn = () =>{
    const dispatch = useDispatch()
    const handleLougout = () => {
        dispatch(onLogout())
    }
    return (
        <>
        <NavLink to="/" onClick={handleLougout}>
            Sing-out
        </NavLink>
        </>
    ) 
}


export default LogoutBtn