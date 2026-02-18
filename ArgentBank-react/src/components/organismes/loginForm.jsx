import Input from '../molecules/input.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector } from '../../store/reducers/userSlice.js';
import { onSubmitLogin } from '../../store/actions/loginAction.js';
import { useNavigate } from 'react-router';


export default function LoginForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchError = useSelector(errorSelector);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(onSubmitLogin(event.target.username.value, event.target.password.value, navigate));
    }

  return (
        <form onSubmit={handleSubmit}>
            <Input />
            <button type="submit" className="sign-in-button">Sign In</button>
            <p>{fetchError
                ? 'identifiants incorect'
                : ''}
            </p>
        </form>
    );
}