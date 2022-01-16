<template>
  <ul>
    <li>
      <div class="post-title">{{ postItem.title }}</div>
      <div class="post-contents">{{ postItem.contents }}</div>
      <div class="post-time">{{ postItem.createdAt | formatDate }}</div>
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </li>
  </ul>
</template>
<script>
import { deletePost } from '@/api/posts';

export default {
  name: 'PostItems',
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
  // filters: {
  //   formatDate(value) {
  //     return new Date(value);
  //   },
  // },
  methods: {
    async deleteItem() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.postItem._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      this.$router.push(`/post/${this.postItem._id}`);
    },
  },
};
</script>
