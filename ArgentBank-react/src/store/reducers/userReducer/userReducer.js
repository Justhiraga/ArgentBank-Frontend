import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: null,
    token: null,
    isLoggedIn: false,
},
  reducers: {
    userLoginSucces: (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
    },
  },
});


export const authStatusSelector = (state) => state.user.isLoggedIn;

export const { userLoginSucces } = userSlice.actions;

export default userSlice.reducer;