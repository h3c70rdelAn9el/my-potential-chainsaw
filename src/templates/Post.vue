<template>
  <BlogLayout>
    <div class="h-screen">
      <p>{{ $page.post.title }}</p>
      <p>Nothing to see here...move along. move along.</p>
      <!-- <p>{{ $page.cfPost.title }}</p> -->
      
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
#  query cfPost($path: String!) {
#     cfPost: contentfulProjects(path: $path) {
#       title,
#       summary
#       image {
#         file {
#           url
#         }
#       }
#       content
#     }
#   }

# query CFPost ($path: String!) {
#   cfPost (path: $path){
#     title
#   }
# }
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
