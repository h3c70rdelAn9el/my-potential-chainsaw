<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />
-->
  
    <Header />
  </Layout>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Header
  },
}
</script>
