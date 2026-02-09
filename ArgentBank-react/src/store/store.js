import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/reducers/userReducer'


const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>
    [
        ...getDefaultMiddleware(),    
    ],
})

export default store