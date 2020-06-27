<template>
  <div>
    <Nav />
    <!-- <Header /> -->
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/Header.vue';
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Nav,
    Footer
  }
}
</script>
