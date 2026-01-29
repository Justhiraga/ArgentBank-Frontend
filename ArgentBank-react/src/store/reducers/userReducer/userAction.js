import { userloginfailure, userLoginSucces, userUpdateProfile, userLogout } from "./userReducer.js";


export const onSubmit = (CredentialEmail, CredentialPassword, navigate) => {
    return async (dispatch) => {
        await fetch("http://localhost:3001/api/v1/user/login",{
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: CredentialEmail,
                password: CredentialPassword
            })
        }).then((response) => {
            if (!response.ok) {
                throw new Error('erreur lors de la requete');
            }
            return response.json();

        }).then((data) => {
            const token = data.body.token;
            dispatch(userLoginSucces(token));
            navigate('/user');
        }).catch(() => {
            dispatch(userloginfailure());
        });
    }
};


export const fetchUserProfile = (token) => {
    return async (dispatch) => {
       await fetch("http://localhost:3001/api/v1/user/profile",{
            method: "GET",
            headers : {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error('erreur lors de la requete');
            }
            return response.json();

        }).then((data) => {
            const user = data.body;
            dispatch(userUpdateProfile(user));
        }).catch(() => {});
    }
};


export const onLogout = (dispatch) => {
    dispatch(userLogout)
}

