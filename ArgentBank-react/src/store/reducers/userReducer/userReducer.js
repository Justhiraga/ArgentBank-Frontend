import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: null,
    token: null,
    isLoggedIn: false,
    error: false,
},
  reducers: {
    userLoginSucces: (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        state.error = false;
    },
    userloginfailure: (state) => {
        state.token = null;
        state.isLoggedIn = false;
        state.error = true;
    },
    userUpdateProfile: (state, action) => {
        state.userProfile = action.payload;
    },
    userLogout: (sate) => {
      sate.userProfile= null;
      sate.token= null;
      sate.isLoggedIn= false;
      sate.error= false;
    }
  }
});

export const authStatusSelector = (state) => state.user.isLoggedIn;

export const errorSelector = (state) => state.user.error;


export const { 
                userLoginSucces,
                userloginfailure,
                userUpdateProfile,
                userLogout
              } = userSlice.actions;



export default userSlice.reducer;