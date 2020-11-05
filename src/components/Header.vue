<template>
<div class=" -mt-24 w-full h-full bg-cover bg-center overflow-visible " :style="{'background-image': `url(${require('../assets/images/keyboard.jpeg')})`}">
  <div class="flex  w-full" style="background-color:rgba(0,0,0,0.6)">
    <div class="container flex flex-col mt-20 items-center mx-auto text-gray-100">
      <div class="">
        <Thinking class="h-20 p-2 bg-contain mt-40 rounded-full w-56 bg-gray-700 opacity-75" />
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
      <br>
      <Weather />
      <Typing :key="componentKey" class="mt-3" />
      <p class="text-center text-green-600 p-6 -mt-2">
        Please have a quick look around or you can just reach me here:
      </p>
      <!-- icons -->
      <div class="flex justify-between mb-3">
        <a href="https://www.github.com/h3c70rdelAn9el" class="text-2xl mx-2">
          <fa :icon="['fab', 'github']" class="hover:text-green-600" />
        </a>
        <a href="" class="text-2xl mx-2">
          <fa :icon="['fab', 'linkedin']" class="hover:text-green-600" />
        </a>
        <a href="" class="text-2xl mx-2">
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
import Weather from '@/components/Weather.vue'

export default {
  components: {
    Typing,
    Thinking,
    Weather
  },
  data() {
    return {
      componentKey: 0,
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
}
</script>

<style>
.profile-image {
  filter: brightness(80%);
}
</style>
