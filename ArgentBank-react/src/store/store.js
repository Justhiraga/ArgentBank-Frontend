import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userReducer/userReducer.js'

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
    [
        ...getDefaultMiddleware(),
    ],
})

export default store