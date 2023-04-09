import axios from "axios";

const url = process.env.NEXT_PUBLIC_DB_URI;

export const createPost = async ({
  creator,
  title,
  message,
  tags,
  selectedFile,
}) => {
  const tag = tags.split(",");
  const data = { creator, title, message, tags: tag, selectedFile };
  const newPost = await axios.post(`${url}/posts`, data);

  return newPost;
};

export const getPosts = async () => {
  const data = await axios.get(`${url}/posts`);

  return data;
};

export const updatePostById = async (id, inputData) => {
  const { creator, title, message, tags, selectedFile } = inputData;
  const tag = tags.split(",");
  const postData = { creator, title, message, tags: tag, selectedFile };
  const updatedPost = await axios.put(`${url}/posts/${id}`, postData);

  return updatedPost;
};

export const likePostById = async (id) => {
  const likePost = await axios.put(`${url}/posts/${id}/likePost`);

  return likePost;
};

export const deletePostById = async (id) => {
  const data = await axios.delete(`${url}/posts/${id}`);

  return data;
};
