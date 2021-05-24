import axios from 'axios';

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    apikey: 'a26f3e1c2f07963b74615c9c0fba6149',
    hash: 'b22e3f60d25f0152040cd7355ae7e4fa',
    ts: '123',
  },
});

export default api;
