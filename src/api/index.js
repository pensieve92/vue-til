import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_RUL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

export { registerUser };
