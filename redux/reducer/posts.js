import * as api from "@/utils/posts";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.getPosts();
  return response.data;
});

export const addPost = createAsyncThunk(
  "posts/addNewPost",
  async ({ creator, title, message, tags, selectedFile }) => {
    const response = await api.createPost({
      creator,
      title,
      message,
      tags,
      selectedFile,
    });
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload.posts;
      return state;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload.newPost);
    });
  },
});

export const postsAction = postsSlice.actions;

export default postsSlice.reducer;
