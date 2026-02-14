import { userInfo } from "../actions/userActions";

export const userInfoMiddleware = (store) => (next) => (action) => {

    if (action.type === "user/userLoginSuccess") {
        store.dispatch(userInfo(action.payload));
    }

    return next(action);
};