<template>
  <div>
    <div v-for="post in $page.posts.edges.node" :key="post.id">
      {{ post.title }}
      <!-- {{ post.date }} -->
    </div>
  </div>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        content
        excerpt
        tags {
          title
        }
        date
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  
}
</script>
