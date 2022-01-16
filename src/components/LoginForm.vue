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
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api';
import { validateEmail } from '@/utils/validation';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

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
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.token);
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.user.username);
        saveAuthToCookie(data.token);
        saveUserToCookie(data.user.username);
        this.$router.push('/main');
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response.data);
        this.logMessage = error.response.data;
        // this.initForm();
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped></style>
