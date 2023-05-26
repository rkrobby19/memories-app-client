import { API } from "./uri";

API.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    req.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    return req;
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

export const getAllPosts = async () => {
  const data = await API.get(`/posts`);

  return data;
};

export const getAllPostsId = async () => {
  const { data } = await getAllPosts();

  const { posts } = data;

  return posts.map((post) => {
    return {
      params: {
        id: post._id,
      },
    };
  });
};

export const getPostById = async (id) => {
  const data = await API.get(`/posts/${id}`);

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

export const commentPostById = async ({ id, finalComment }) => {
  const commentPost = await API.post(`/posts/${id}/commentPost`, finalComment);

  return commentPost;
};

export const deletePostById = async (id) => {
  const data = await API.delete(`/posts/${id}`);

  return data;
};
