import { loginSuccess, loginFailure, userLogOut} from '../reducers/userSlice';




export const onSubmitLogin = (CredentialEmail, CredentialPassword, navigate) => {
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
            dispatch(loginSuccess(token));
            navigate('/user');
        }).catch(() => {
            dispatch(loginFailure());
        });
    }
};


export const onLogout = (dispatch) => {

    dispatch(userLogOut);
}
