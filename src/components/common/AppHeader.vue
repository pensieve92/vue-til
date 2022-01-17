<template>
  <header style="padding-bottom: 20px">
    <div style="float: left">
      <router-link :to="logoLink">
        TIL
        <span class="username" v-if="isUserLogin">
          {{ $store.state.username }}
        </span>
      </router-link>
    </div>
    <div style="float: right">
      <!--    1-->
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser">Logout</a>
      </template>
      <!--    2-->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        |
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('til_user');
      deleteCookie('til_auth');
      this.$router.push('/login');
    },
  },
};
</script>

<style>
.username {
  /*color: white;*/
}
</style>
