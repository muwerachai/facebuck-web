import axios from '../config/axios';

export const createPost = (title, image) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('image', image);
  return axios.post('/posts', formData);
};

export const getAllPost = () => axios.get('/users/posts');

export const createComment = (title, postId) =>
  axios.post(`/posts/${postId}/comments`, { title });

  export const deleteComment = (postId, commentId) =>
  axios.delete(`/posts/${postId}/comments/${commentId}`);

export const createLike = postId => axios.post(`/posts/${postId}/like`);
export const deleteLike = postId => axios.delete(`/posts/${postId}/like`);