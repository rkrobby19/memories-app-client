import { API } from "./uri";

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

export const getPosts = async () => {
  const data = await API.get(`/posts`);

  return data;
};

export const updatePostById = async (id, inputData) => {
  const { creator, title, message, tags, selectedFile } = inputData;
  const tag = tags.split(",");
  const postData = { creator, title, message, tags: tag, selectedFile };
  const updatedPost = await API.put(`/posts/${id}`, postData);

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
