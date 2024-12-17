import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu-backend-url.com/api', // Substitua pela URL da API
});

export default api;