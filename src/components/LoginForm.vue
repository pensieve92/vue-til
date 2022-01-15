<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"></label>id:
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password"></label>pw:
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api';

export default {
  name: 'LoginForm',
  data() {
    return {
      // form value
      username: '',
      password: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      this.logMessage = `${data.user.username} 님 환영합니다.`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped></style>
