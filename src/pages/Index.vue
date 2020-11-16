<template>
  <Layout>
    <Header class="parallax" />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </Layout>
</template>

<script>
import Header from '~/components/sections/Header.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    Header,
    AboutSection,
    ProjectsSection,
    ContactSection
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
