import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.122:8080',
  headers: {
    'Content-Type': 'application/json ',
    Accept: 'application/json',
    'Access-Control-Origin': '*',
  },
});

export default api;
