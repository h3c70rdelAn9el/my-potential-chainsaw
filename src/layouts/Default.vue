<template>
<div class="body">
  <Nav />
  <slot />
  <FooterComponent />
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
import FooterComponent from '~/components/FooterComponent.vue'

export default {
  components: {
    Header,
    Nav,
    FooterComponent
  }
}
</script>
