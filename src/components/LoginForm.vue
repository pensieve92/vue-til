<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username"></label>id:
      <input id="username" type="text" v-model="username" />
      <span class="warning">Plese enter an email address</span>
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
import { validateEmail } from '@/utils/validation';

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
        // store에서 비동기처리가 끝나고 난 후에
        // this.$router.push('/main');가 진행되어야 하기 때문에
        // await를 꼭 붙여주어야 한다.
        await this.$store.dispatch('LOGIN', userData);
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
