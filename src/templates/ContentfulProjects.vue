<template>
<BlogLayout>
  <div class="" >
    <h1 class="text-4xl text-center shadow-lg">{{ $page.post.title }}</h1>
    <hr class="border border-bottom border-black">
    <div class="flex flex-col bg-gray-500 mx-10 pt-2">
      <div class="mx-auto">
        <g-image :src="$page.post.image.file.url" class="mx-auto rounded shadow-lg" style="height: 350px;"/>
      </div>
      <div class="p-4 md:m-0">
        <section v-html="richtextToHTML($page.post.summary)" class="text-center"/>
      </div>
      <hr class="border border-bottom border-gray-600 mx-auto w-2/3">
      <div class="p-4 md:m-0 -mt-2 lg:mx-16">
        <main v-html="richtextToHTML($page.post.content)"></main>
      </div>
      <button class="mx-auto -mt-4 pb-3">
        <g-link to="/blog" class="text-black hover:text-gray-100">
          Back
        </g-link>
      </button>
    </div>
  </div>
</BlogLayout>
</template>

<page-query>
  query Post($path: String!) {
    post: contentfulProjects(path: $path) {
      title,
      summary
      image {
        file {
          url
        }
      }
      content
    }
  }
</page-query>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'


export default {
  methods: {
    richtextToHTML (content) {
    return documentToHtmlString(content)
    },
  }
}
</script>

<style scoped>
  section >>> h4 {
    font-size: 20px;
    text-align: center;
  }

  section >>> ul {
    margin-bottom: 4px;
  }
  
  section >>> a {
    border: 2px solid black;
    border-radius: 8px;
    padding: 4px;
    margin: 4px;
  }

  section >>> a:hover {
    color: white;
  }
</style>
