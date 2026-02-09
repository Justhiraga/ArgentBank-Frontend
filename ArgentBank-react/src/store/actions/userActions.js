import { userLoginSuccess } from "../reducers/userReducer";
import { userLoginFailure } from "../reducers/userReducer";

export const onSubmit = (CredentialEmail, CredentialPassword, navigate) => {
    return async (dispatch) => {
        await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: CredentialEmail,
                password: CredentialPassword,
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error('erreur lors de la requete');
            }
            return response.json();

        }).then((data) => {
            const token = data.body.token;
            dispatch(userLoginSuccess(token));
            navigate('/user');
        }).catch(() => {
            dispatch(userLoginFailure());
        });
    }
};

export const onLogout = () => {
    return async (dispatch) => {
        dispatch(userLoginFailure());
    }
};