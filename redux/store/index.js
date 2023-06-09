import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducer/posts";
import userReducer from "../reducer/user";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

export default store;
