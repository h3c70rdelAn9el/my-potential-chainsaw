<template>
  <Layout>
    <Header class="parallax" />
    <AboutSection />
    <ProjectCard />
    <ContactSection />
  </Layout>
</template>


<page-query>
  query Posts {
    posts:  allContentfulProjects (sortBy: "date", order: ASC) {
      edges {
        node {
          title
          id
          summary
          content
          image {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
</page-query>


<script>
import Header from '~/components/sections/Header.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import BlogPost from '@/components/BlogPost.vue'


export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    Header,
    AboutSection,
    ContactSection,
    ProjectCard
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
