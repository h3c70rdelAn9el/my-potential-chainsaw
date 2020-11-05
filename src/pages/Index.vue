<template>
<Layout>
  <Header class="parallax" />
  <AboutSection />
  <ProjectsSection />
</Layout>
</template>

<script>
import Header from '~/components/Header.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Header,
    AboutSection,
    ProjectsSection
  },
}
</script>

<style>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
</style>
