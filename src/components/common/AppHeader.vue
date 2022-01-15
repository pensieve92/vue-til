<template>
  <header style="padding-bottom: 20px">
    <div style="float: left">
      <router-link to="/">TIL</router-link>
    </div>
    <div style="float: right">
      <!--    1-->
      <template v-if="isUserLogin">
        <span class="username">{{ $store.state.username }}</span>
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
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
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
