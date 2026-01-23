import Input from '../molecules/input.jsx';
import { useDispatch } from 'react-redux';
import { onSubmit } from '../../store/reducers/userReducer/userAction.js';
import { useNavigate } from 'react-router';


export default function Form() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(onSubmit(navigate));
    }


    return (
        <form onSubmit={handleSubmit}>
            <Input />
            <button type='submit' className="sign-in-button">Sign In</button>
        </form>
    );
}