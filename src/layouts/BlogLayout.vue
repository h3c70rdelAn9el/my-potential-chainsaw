<template>
  <div>
    <BlogNav />
    <div class="pt-20 bg-gray-400">
      <slot />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import BlogNav from '@/components/BlogNav.vue'
import FooterComponent from '@/components/FooterComponent'

export default {
  components: {
    BlogNav,
    FooterComponent
  }
}
</script>
