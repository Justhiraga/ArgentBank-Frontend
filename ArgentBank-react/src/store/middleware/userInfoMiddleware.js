import { userInfo } from '../actions/infoUserAction';



export const userInfoMiddleware = (store) => (next) => (action) => {

    if (action.type === 'user/loginSuccess') {
        store.dispatch(userInfo(action.payload));
    }

    return next(action);

};

