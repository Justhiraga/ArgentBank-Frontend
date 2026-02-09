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
        }
    }
});

export const {  
                userLoginSuccess, 
                userLoginFailure
             } = userSlice.actions;

export const errorSelector = (state) => state.user.error;

export const logStatutsSelector = (state) => state.user.isLogged;

export default userSlice.reducer;