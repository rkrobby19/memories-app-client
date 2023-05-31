import { Status } from "@/constants/reducer";
import * as api from "@/services/user";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  status: Status.Idle,
  error: null,
};

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ firstName, lastName, email, password, confirmPassword }) => {
    try {
      const { data, status } = await api.userSignUp({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      return { data, status };
    } catch (error) {
      console.log(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }) => {
    try {
      const { data, status } = await api.userSignIn({
        email,
        password,
      });
      return { data, status };
    } catch (error) {
      console.log(error);
    }
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
      if (action.payload.status === 200) {
        state.user = action.payload.data.user;
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload.data.token)
        );
        return state;
      } else {
        state.status = Status.Failed;
        state.error = action.payload.data.message;
        return state;
      }
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      if (action.payload.status === 200) {
        state.user = action.payload.data.user;
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        localStorage.setItem(
          "token",
          JSON.stringify(action.payload.data.token)
        );
        return state;
      } else {
        state.status = Status.Failed;
        state.error = action.payload.data.message;
        return state;
      }
    });
  },
});

export const { logOut, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
