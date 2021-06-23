import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:5000";

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, username, password }) => {
    console.log(email, username, password);
    const response = await fetch(`http://localhost:5000/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    console.log(response);
    if (!response.ok) throw new Error("Somehting went worng, please try again");

    return {
      message: "sign up successfully",
    };
  }
);

export const singIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }) => {
    
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    console.log(response);

    if (!response.ok) throw new Error("Somehting went worng, please try again");

    const data = await response.json();
    console.log(data);

    return {
      user: data.user,
      token: data.token,
    };
  }
);
