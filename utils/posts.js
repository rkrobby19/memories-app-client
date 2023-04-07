import axios from "axios";

const url = "http://localhost:8000/api";

export const createPost = async ({
  creator,
  title,
  message,
  tags,
  selectedFile,
}) => {
  //  TODO split the tags using comma ','
  const data = { creator, title, message, tags, selectedFile };
  const newPost = await axios.post(`${url}/post`, data);

  return newPost;
};

export const getPosts = async () => {
  const data = await axios.get(`${url}/posts`);

  return data;
};
