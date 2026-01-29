import Input from '../molecules/input.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmit } from '../../store/reducers/userReducer/userAction.js';
import { errorSelector } from '../../store/reducers/userReducer/userReducer.js';
import { useNavigate } from 'react-router';


export default function Form() {
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const fetchError = useSelector (errorSelector);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(onSubmit(event.target.username.value, event.target.password.value, navigate));
    };


    return (
        <form onSubmit={handleSubmit}>
            <Input />
            <button type='submit' className="sign-in-button">Sign In</button>
            <p>{fetchError
                ? 'identifiants incorect'
                : ''}
            </p>
        </form>
    );
}