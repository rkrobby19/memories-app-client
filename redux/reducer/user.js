import * as api from "@/utils/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ firstName, lastName, email, password, confirmPassword }) => {
    const response = await api.userSignUp({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    console.log(response.data);
    return response.data;
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }) => {
    const response = await api.userSignIn({
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      return state;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      return state;
    });
  },
});

export const userAction = userSlice.actions;

export default userSlice.reducer;
