import { userLoginSucces } from "./userReducer.js";




export const onSubmit = (navigate) => {
    return async (dispatch) => {
        await setTimeout(() => {
            dispatch(userLoginSucces('blabla'));
            navigate('/user');
        }, 1000);
    }
};

