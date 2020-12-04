<template>
  <div>
    <div>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="border border-black rounded mx-6 my-5 bg-gray-600"
      >
        <g-image
          :src="post.node.image.file.url"
          alt=""
          class="w-full h-24 rounded object-cover shadow-lg opacity-75"
        />
        <div class="p-2 flex flex-col">
          <h1 class="text-2xl font-bold">{{ post.node.title }}</h1>
          <div>{{ post.node.excerpt }}</div>
          <button class="hover:text-gray-100 rounded p-1">
            <g-link :to="post.node.path" class="">
              ...more
            </g-link>
          </button>
          <div class="pt-2 flex">
            <button
              class="border border-white hover:border-black hover:text-gray-100 rounded p-1 w-20 mx-auto"
            >
              <a :href="post.node.link">Link</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  props: ['post'],

  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content)
    },
  },
}
</script>
