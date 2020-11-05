<template>
<Layout>
  <div class="w-full flex bg-cover h-32 bg-center overflow-visible " :style="{'background-image': `url(${require('../img/books.jpg')})`}">
    <div class="flex h-32 w-full" style="background-color:rgba(0,0,0,0.6)">
      <div class="text-gray-100 m-auto">
        <h1 class="text-4xl text-center font-title">Scribbles</h1>
        <p class="text-gray-100 text-2xl text-center font-title -mt-3 ">My digital scribbles on my musings.</p>
        <p class="text-gray-100 text-lg text-center -mt-1 font-title">Some a bit more trivial to some more than others</p>
      </div>
    </div>
  </div>
  <div class="h-screen -mt-8 bg-gray-700">
    <g-link>
      <div class="text-gray-100  ml-5 mr-4 mt-8 h-full">
        <div v-for="post in $page.allPost.edges" :key="post.node.id">
          <h1 class="pt-2">{{ post.node.title }} </h1>
          <p>{{ post.node.date }} </p>
          <p class="pb-3">{{ post.node.excerpt }} </p>
          <hr />
        </div>
      </div>
    </g-link>

  </div>
</Layout>
</template>

<page-query>
query {
  allPost {
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
  metaInfo: {
    title: 'blog',
  },
  components: {},
  // data() {
  //   return {
  //     show: {
  //       home: true,
  //       about: true,
  //       blog: true,
  //       contact: false
  //     }
  //   }
  // }
};
</script>
