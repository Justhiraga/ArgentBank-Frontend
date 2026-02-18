import { userProfile, userProfileError } from '../reducers/userSlice'



export const userInfo = (token) => {
    return async (dispatch) => {
        await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error('erreur lors de la requete');
            }
            return response.json();

        }).then((data) => {
            const user = data.body;
            dispatch(userProfile(user));

        }).catch(() => {
            dispatch(userProfileError());
        });
    }
}