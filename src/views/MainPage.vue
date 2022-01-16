<template>
  <div class="contents main">
    <h1>Today I Learned</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <ul v-else>
      <PostLIstItem
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
      />
    </ul>
    <router-link class="create-button" to="/add">
      <i class="ion-md-add icon"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPosts } from '@/api';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import PostLIstItem from '@/components/posts/PostLIstItem';

export default {
  name: 'MainPage',
  components: { PostLIstItem, LoadingSpinner },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPosts();
      console.log(data);
      this.isLoading = false;
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
