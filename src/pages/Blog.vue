<template>
  <Layout>
    <div class="blog relative hidden sm:block">
      <g-image class="h-56 bg-cover opacity-50 relative" src="~/img/books.jpg" />
      <h1 class="text-4xl text-gray-100 absolute inset-0">My Scribbles</h1>
      <p>My digital scribbles on my musings.</p>
      <!-- <p>{{ $page.allPost.edges.node.title }} </p> -->
    </div>
    <div class="blog sm:hidden h-32 text-white small text-center p-6">
      <h1 class="text-4xl">My Scribbles</h1>
      <p>My digital scribbles on my musings.</p>
      <p class="pb-8">Some a bit more trivial to some more than others</p>
      <hr />
    </div>
    <g-link class="hover:bg-white">
    <div class="posts text-gray-100  ml-5 mr-4 mt-8 h-screen">
      <div v-for="post in $page.allPost.edges" :key="post.node.id">
        <h1 class="pt-2">{{ post.node.title }} </h1>
        <p>{{ post.node.date }} </p>
        <p class="pb-3">{{ post.node.excerpt }} </p>
        <hr />
      </div>
    </div>
    </g-link>
    <!-- image by Clem Onojehjuo on Unsplash -->
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
import Nav from '~/components/Nav.vue';

export default {
  metaInfo: {
    title: 'blog',
  },
  components: {
    Nav
  },
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
