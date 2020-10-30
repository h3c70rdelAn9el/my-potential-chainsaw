<template>
<div class=" -mt-24 w-full h-screen bg-cover bg-center overflow-visible " :style="{'background-image': `url(${require('../assets/images/keyboard.jpeg')})`}">
  <div class="flex h-screen w-full" style="background-color:rgba(0,0,0,0.6)">
    <div class="container flex flex-col items-center mx-auto text-gray-100">
      <div>
        <g-image src="../assets/images/profile_pic.jpg" width="250" height="250" class="profile-image mt-40 rounded-full opacity-100" />
      </div>
      <div class="text-6xl sm:text-8xl font-title text-center text-green-600">
        Hector del Angel
      </div>
      <div class=" mb-2">
        <p class="font-sans text-green-600 leading-tight text-3xl">
          Just another Web Dev
        </p>
      </div>
      <p class="text-base text-center text-green-600 mt-4 mx-16">
        Welcome to my site!
      </p>
      <Typing class="mt-3" />
      <p class="text-center text-green-600 p-6 -mt-2">
        Please have a quick look around or you can just reach me here:
      </p>
      <!-- icons -->
      <div class="flex w-1/5 justify-between mb-3 mt-3">
        <a href="https://www.github.com/h3c70rdelAn9el">
          <font-awesome :icon="['fab', 'github']" />
        </a>
        <a href="">
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>
        <a href="">
          <font-awesome :icon="['fas', 'envelope']" />
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Typing from '@/components/Typing.vue'

export default {
  components: {
    Typing
  }
}
</script>

<style>
.profile-image {
  filter: brightness(80%);
}
</style>
