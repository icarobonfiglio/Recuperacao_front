import axios from 'axios';

const api = axios.create({
  baseURL: 'https://recuperacao-back.onrender.com/api', 
});

export default api; 
