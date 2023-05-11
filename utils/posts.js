import { API } from "./uri";

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return req;
});

export const createPost = async ({
  creator,
  title,
  message,
  tags,
  selectedFile,
}) => {
  const tag = tags.split(",");
  const data = { creator, title, message, tags: tag, selectedFile };
  const newPost = await API.post(`/posts`, data);

  return newPost;
};

export const getPosts = async (pages) => {
  const data = await API.get(`/posts?pages=${pages}`);

  return data;
};

export const getPostsBySearch = async ({ query, tags }) => {
  const data = await API.get(`/posts/search?q=${query || "none"}&tags=${tags}`);

  return data;
};

export const updatePostById = async ({ id, inputData }) => {
  const updatedPost = await API.put(`/posts/${id}`, inputData);

  return updatedPost;
};

export const likePostById = async (id) => {
  const likePost = await API.put(`/posts/${id}/likePost`);

  return likePost;
};

export const deletePostById = async (id) => {
  const data = await API.delete(`/posts/${id}`);

  return data;
};
