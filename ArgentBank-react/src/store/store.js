import { configureStore } from '@reduxjs/toolkit'
import { userInfoMiddleware } from './middleware/userInfoMiddleware'
import userReducer from './reducers/userSlice'


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