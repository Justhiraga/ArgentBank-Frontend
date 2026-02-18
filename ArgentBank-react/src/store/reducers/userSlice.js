import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userProfile: null,
        token: null,
        isLogged: false,
        error: false,

    },
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload.token
            state.isLogged = true
            state.error = false
        },
        loginFailure: (state) => {
            state.token = null
            state.isLogged = false
            state.error = true
        },
        userLogOut: (state) => {
            state.token = null
            state.isLogged = false
            state.error = false
        },
        userProfile: (state, action) => {
            state.userProfile = action.payload
            state.error = false
        },
        userProfileError: (state) => {
            state.userProfile = null
            state.error = true
        }
    }
})

export const { loginSuccess, loginFailure , userLogOut, userProfile, userProfileError} = userSlice.actions

export const logStatutsSelector = (state) => state.user.isLogged



export const errorSelector = (state) => state.user.error

export default userSlice.reducer