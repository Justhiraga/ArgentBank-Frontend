import { fetchUserProfile } from "./userReducer/userAction"


export const succesFullLoginMiddleware = (store) => (next) => (action) => {
    if (action.type === "user/userLoginSucces"){
        store.dispatch(fetchUserProfile(action.payload))
    }
    return next(action);
}

