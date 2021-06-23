import { createSlice } from "@reduxjs/toolkit";
import {  singIn } from "./user_actions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    uuid: null,
    email: "robert@robert.com",
    username: null,
    status: null,
    token: null,
  },
  reducers: {},
  extraReducers: {
    [singIn.fulfilled]: (state, action) => {
      const { user, token } = action.payload;
      state.uuid = user.uuid;
      state.email = user.email;
      state.username = user.name;
      state.status = user.status;
      state.token = token;
    },
  },
});

// export const cartActions = cartSlice.actions;

export const userActions = userSlice.actions;

export default userSlice;
