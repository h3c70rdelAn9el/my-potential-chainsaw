<template>
  <BlogLayout>
    <div>
      <h1 class="text-6xl text-center font-title -mb-8 -mt-2">Blog</h1>
    </div>
    <div class="content md:flex ">
      <div class="mx-6 mt-3 md:mx-2 md:mb-2 p-2 shadow-xl border border-gray md:w-1/3 md:mt-4 md:p-4 text-sm ">
        <p>Welcome to my personal "almost" blog.  These are mostly my projects, and not really written for anyone else to gain any benefit from it besides myself.  Just a way to upload and jot my learnings and failures.  I will also (in the future) try to include my other interests, again, only really beneficial to me. </p> 
      </div>
      <div>
        <BlogProjectCard class="-mb-6 pb-6" />
      </div>
    </div>

  </BlogLayout>
</template>

<page-query>
  query Posts {
    posts:  allContentfulProjects (sortBy: "date", order: ASC) {
      edges {
        node {
          title
          id
          summary
          content
          path
          excerpt
          link
          image {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import BlogProjectCard from '../components/BlogProjectCard.vue'

export default {
  metaInfo: {
    title: 'blog',
  },

  components: {
    BlogProjectCard,
  },
}
</script>
