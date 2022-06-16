import axios from "axios";

const API_HOST = "https://guestbook.devhudi.xyz";

export const findAllByOwnerId = (ownerId) => {
  return axios.get(`${API_HOST}/${ownerId}/articles`);
};

export const findById = (id) => {
  return axios.get(`${API_HOST}/articles/${id}`);
};

export const createArticle = (id, title, body) => {
  return axios.post(`${API_HOST}/${id}/articles`, {
    title,
    body,
  });
};

export const updateArticle = (id, title, body) => {
  return axios.put(`${API_HOST}/articles/${id}`, {
    title,
    body,
  });
};

export const deleteArticle = (id) => {
  return axios.delete(`${API_HOST}/articles/${id}`);
};
