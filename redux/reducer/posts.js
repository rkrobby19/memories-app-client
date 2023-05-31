import { Status } from "@/constants/reducer";
import * as api from "@/services/posts";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// TODO change initial state to read post data for user update modal

const initialState = {
  posts: [],
  search: [],
  status: Status.Idle,
  error: null,
  currentPage: null,
  numberOfPages: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (pages) => {
    const response = await api.getPosts(pages);
    return response.data;
  }
);

export const fetchPostsBySearch = createAsyncThunk(
  "post/fetchPostsBySearch",
  async ({ query, tags }) => {
    const response = await api.getPostsBySearch({ query, tags });

    return response.data;
  }
);

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

export const updatedPost = createAsyncThunk(
  "posts/updatePostById",
  async ({ id, inputData }) => {
    const response = await api.updatePostById({
      id,
      inputData,
    });
    return response.data;
  }
);

export const likePost = createAsyncThunk("posts/likePostById", async (id) => {
  const response = await api.likePostById(id);
  return response.data;
});

export const deletePost = createAsyncThunk(
  "posts/deletePostById",
  async (id) => {
    const response = await api.deletePostById(id);
    return response.data;
  }
);

export const commentPost = createAsyncThunk(
  "posts/commentPostById",
  async ({ finalComment, id }) => {
    const response = await api.commentPostById({ id, finalComment });
    return response;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = Status.Loading;
      return state;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = "error";
      return state;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.posts = action.payload.posts;
      state.currentPage = action.payload.currentPage;
      state.numberOfPages = action.payload.numberOfPages;
      return state;
    });
    builder.addCase(fetchPostsBySearch.pending, (state, action) => {
      state.status = Status.Loading;
      return state;
    });
    builder.addCase(fetchPostsBySearch.rejected, (state, action) => {
      state.status = Status.Failed;
      state.error = "error";
      return state;
    });
    builder.addCase(fetchPostsBySearch.fulfilled, (state, action) => {
      state.status = Status.Success;
      state.search = action.payload.posts;
      return state;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.posts.push(action.payload.post);
    });
    builder.addCase(updatedPost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
    });
    builder.addCase(likePost.fulfilled, (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
    });
    builder.addCase(commentPost.fulfilled, (state, action) => {
      return state;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload.post._id
      );
    });
  },
});

export const postsAction = postsSlice.actions;

export default postsSlice.reducer;
