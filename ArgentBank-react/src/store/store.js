import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userReducer/userReducer.js'
import { succesFullLoginMiddleware } from './reducers/succesLoginMiddleware.js'

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
    [
        ...getDefaultMiddleware(),
        succesFullLoginMiddleware,
        
    ],
})

export default store