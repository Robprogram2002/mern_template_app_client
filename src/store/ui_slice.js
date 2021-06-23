import { createSlice } from "@reduxjs/toolkit";
import { signUp, singIn } from "./user_actions";

const errorMessage = "An error has ocurred, please try again";

const uiSlice = createSlice({
  name: "uiState",
  initialState: {
    laoding: false,
    errorResponse: false,
    errorMessage: false,
    succesResponse: false,
    succesMessage: false,
  },
  reducers: {},
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.laoding = true;
    },
    [signUp.rejected]: (state, action) => {
      state.laoding = false;
      state.errorResponse = true;
      state.errorMessage = errorMessage;

      console.log(action);
    },
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.succesResponse = true;
      state.succesMessage = action.payload.message;
    },
    [singIn.pending]: (state, action) => {
      state.laoding = true;
    },
    [singIn.rejected]: (state, action) => {
      state.laoding = false;
      state.errorMessage = errorMessage;
      state.errorResponse = true;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
