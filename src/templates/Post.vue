<template>
  <BlogLayout>
    <!-- <div v-html="$page.post.content"/> -->
  </BlogLayout>
</template>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
