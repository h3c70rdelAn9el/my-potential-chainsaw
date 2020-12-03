<template>
  <BlogLayout>
    <div v-html="$page.post.content"/>
  </BlogLayout>
</template>

# query Post ($path: String!) {
#   post: post (path: $path) {
#     title
#     content
#   }
# }

  # query Post ($path: String!){
  #   post:  contentfulProjects (path: $path) {
  #     edges {
  #       node {
  #         title
  #         id
  #         summary
  #         content
  #         image {
  #           id
  #           file {
  #             url
  #           }
  #         }
  #       }
  #     }
  #   }
  # }

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>
