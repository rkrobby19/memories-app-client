import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducer/posts";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
