<template>
  <BlogLayout>
    <div class="h-screen">
      <p>{{ $page.post.title }}</p>
      <p>Nothing to see here...move along. move along.</p>
    </div>
    <!-- <div v-html="$page.post.content"/> -->
  </BlogLayout>
</template>

<page-query>
query Post ($path: String!) {
  post (path: $path){
  	title
    # content
  }
}
</page-query>

<script>
export default {
  props: ['post'],
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>
