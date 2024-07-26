import axios from 'axios';

const apiAxiosInstance = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

export default apiAxiosInstance;
