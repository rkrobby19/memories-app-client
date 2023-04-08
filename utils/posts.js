import axios from "axios";

const url = "http://localhost:8000/api";

export const createPost = async ({
  creator,
  title,
  message,
  tags,
  selectedFile,
}) => {
  //  TODO split the tags using comma ',' to create array result
  const data = { creator, title, message, tags, selectedFile };
  const newPost = await axios.post(`${url}/post`, data);

  return newPost;
};

export const getPosts = async () => {
  const data = await axios.get(`${url}/posts`);

  return data;
};

export const updatePostById = async (id, inputData) => {
  const { creator, title, message, tags, selectedFile } = inputData;
  const postData = { creator, title, message, tags, selectedFile };
  const updatedPost = await axios.put(`${url}/posts/${id}`, postData);

  return updatedPost;
};

export const deletePostById = async (id) => {
  const data = await axios.delete(`${url}/posts/${id}`);

  return data;
};
