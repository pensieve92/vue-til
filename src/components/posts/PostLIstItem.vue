<template>
  <ul>
    <li>
      <div class="post-title">{{ postItem.title }}</div>
      <div class="post-contents">{{ postItem.contents }}</div>
      <div class="post-time">{{ postItem.createdAt }}</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'PostItems',
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
};
</script>
