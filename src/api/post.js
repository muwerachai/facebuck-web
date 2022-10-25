import axios from '../config/axios';

export const createPost = (title, image) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('image', image);
  return axios.post('/posts', formData);
};