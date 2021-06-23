import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000";

export const signUp = createAsyncThunk(
  "user/signUp",
  async (email, username, password) => {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: username,
        password: password,
      }),
    });
    console.log(response);

    return {
      message: "sign up successfully",
    };
  }
);

export const singIn = createAsyncThunk(
  "user/signIn",
  async (email, password) => {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    console.log(response);
    const data = await response.json();

    return {
        user : data.user,
        token: data.token 
    }
  }
);





