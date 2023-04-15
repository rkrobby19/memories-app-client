import * as api from "@/utils/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  status: "idle",
  error: null,
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

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      localStorage.clear();
      state.user = {};
      return state;
    },
    setCurrentUser(state, action) {
      state.user = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return state;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return state;
    });
  },
});

export const { logOut, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
