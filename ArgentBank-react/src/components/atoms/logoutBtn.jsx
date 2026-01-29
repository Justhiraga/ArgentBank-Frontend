import { Link } from "react-router";
import { onLogout } from "../../store/reducers/userReducer/userAction"
import { useDispatch } from "react-redux";


const LogoutBtn = () =>{
    const dispatch = useDispatch()
    const handleLougout = () => {
        dispatch(onLogout())
    }
    return (
        <>
        <Link to="/" onClick={handleLougout}>
            Sing-out
        </Link>
        </>
    ) 
}


export default LogoutBtn