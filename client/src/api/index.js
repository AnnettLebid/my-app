import axios from 'axios';

const API = axios.create({ baseURL: `http://localhost:5000` });

export const fetchUsers = () => API.get('/users');
export const createUser = (userData) => API.post('/users', userData);
export const updateUser = (id, userData) => API.patch(`users/${id}`, userData);
export const deleteUser = (id) => API.delete(`/users/${id}`);
