import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/reducers/userReducer'
import { userInfoMiddleware } from '../store/reducers/userInfoMiddleware'


const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
    [
        ...getDefaultMiddleware(),
        userInfoMiddleware,
    ],
})

export default store