import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userProfile: null,
        token: null,
        isLogged: false,
        error: false,
    },
    reducers: {
        userLoginSuccess: (state, action) => {
            state.token = action.payload;
            state.isLogged = true;
            state.error = false;
        },
        userLoginFailure: (state) => {
            state.token = null;
            state.isLogged = false;
            state.error = true;
        },
        userLogOut: (state) => {
            state.token = null;
            state.isLogged = false;
            state.error = false;
        },
        userInfoPorfile: (state, action) => {
            state.userProfile = action.payload;
            state.error = false;
        },
        userInfoError: (state) => {
            state.userProfile = null;
            state.error = true;
        },
    }
});

export const {  
                userLoginSuccess, 
                userLoginFailure,
                userLogOut,
                userInfoPorfile,
                userInfoError,
             } = userSlice.actions;

export const errorSelector = (state) => state.user.error;

export const userNameSelector = (state) => state.user.userProfile.userName;

export const logStatutsSelector = (state) => state.user.isLogged;

export default userSlice.reducer;