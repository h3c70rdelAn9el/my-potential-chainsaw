<template>
  <div
    class="w-full h-full -mt-24 overflow-visible bg-center bg-cover "
    :style="{
      'background-image': `url(${require('../../assets/images/keyboard.jpeg')})`,
    }"
  >
    <div class="flex w-full" style="background-color:rgba(0,0,0,0.6)">
      <div
        id="header" class="container flex flex-col items-center mx-auto mt-20 text-gray-100 header"
      >
        <div>
          <Thinking
            class="w-56 h-20 p-2 mt-40 bg-gray-700 bg-contain rounded-full opacity-75"
          />
        </div>
        <div class="text-6xl text-center text-green-600 sm:text-8xl font-title">
          Hector del Angel
        </div>
        <div class="mb-1 ">
          <p class="-mt-3 font-sans text-3xl leading-tight text-green-600">
            Just a Web Dev
          </p>
        </div>
        <p class="mx-16 mt-2 text-base text-center text-green-600">
          Welcome to my site!
        </p>
        <br />
        <Weather class="pb-6" />
        <Typing class="-mb-2" />
        <!-- <hr> -->
        <p class="p-6 -mt-2 text-center text-green-600">
          Please have a quick look around or you can just reach me here:
        </p>
        <!-- icons -->
        <div class="flex -mt-4 justify-between mb-3">
          <a href="https://www.github.com/h3c70rdelAn9el" class="mx-2 text-2xl">
            <fa :icon="['fab', 'github']" class="hover:text-green-600" />
          </a>
          <a href="https://www.linkedin.com/in/hectordelangel" class="mx-2 text-2xl">
            <fa :icon="['fab', 'linkedin']" class="hover:text-green-600" />
          </a>
          <a href="mailto:hectordelangel@gmail.com" class="mx-2 text-2xl">
            <fa :icon="['fas', 'envelope']" class="hover:text-green-600" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typing from '@/components/Typing.vue'
import Thinking from '@/assets/svgs/Thinking.svg'
// import Weather2 from '@/components/Weather2.vue'

import Weather from '@/components/Weather.vue'

export default {
  components: {
    Typing,
    Thinking,
    Weather
    // Weather2,
  }
}
</script>

<style>
.profile-image {
  filter: brightness(80%);
}
</style>
