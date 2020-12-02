<template>
  <div class="projects w-full pb-1" id="projects">
    <h1 class="text-green-400 bg-black opacity-75 text-5xl h-16 text-center font-title">Projects</h1>
    <div class=" sm:flex sm:flex-wrap mt-2 mx-10">
      <!-- Projects Card -->
        <div v-for="post in $page.posts.edges" :key="post.id"  class="text-gray-100  sm:w-1/2 sm:p-2 lg:w-1/3">
          <div class="flex border border-black bg-gray-800 rounded p-4 h-full  mb-2 py-2 shadow-xl">
            <div class="mx-auto">
              <g-image :src="post.node.image.file.url" alt="" class="w-64 h-64 object-cover -pb-10 shadow-lg mx-auto" />
              <section v-html="richtextToHTML(post.node.summary)" class="mb-4"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  props: ["post"],
  metaInfo: {
    title: 'blog',
  },
  components: {
  },
  methods: {
    richtextToHTML (content) {
      return documentToHtmlString(content)
    }
  },
}
</script>

<style scoped>
  section >>> h2 {
    font-size: 20px
  }

  section >>> h4 {
    font-size: 20px;
    text-align: center;
  }

  section >>> a {
    border: 4px solid green;
    padding: 4px;
    border-radius: 8px;
  }

  section >>> ul {
    margin-bottom: 8px;
  }

  section >>> p {
    text-align: center; 
  }

  .projects {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%23308b47' fill-opacity='0.26'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
