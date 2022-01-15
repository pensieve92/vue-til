import axios from 'axios';
import store from 'store';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_RUL,
  headers: {
    Authorization: store.state.token,
  },
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}
export { registerUser, loginUser };
