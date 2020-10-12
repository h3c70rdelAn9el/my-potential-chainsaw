<template>
  <div class=" -mt-24  w-full bg-cover bg-center overflow-visible " :style="{'background-image': `url(${require('../assets/images/keyboard.jpeg')})`}">
    <div class="flex w-full" style="background-color:rgba(0,0,0,0.6)">
      <div class="container flex flex-col items-center mx-auto text-gray-100">
        <div>
          <g-image src="../assets/images/profile_pic.jpg" width="250" height="250" class="mt-40 rounded-full opacity-75" />
        </div>
        <div class="text-5xl sm:text-8xl font-title text-center text-green-400 mb-2">
          Hector del Angel
        </div>
        <div class=" mb-2">
          <p class="font-sans leading-tight text-3xl text-gray-100">
            Web Dev
          </p>
        </div>
        <p class="text-base text-center text-gray-100 mt-4 mx-16">
          Welcome to my site!
        </p>
        <p class="text-center p-6 mx-3">
          Please have a quick look around or you can just reach me here: 
        </p>
        <!-- icons -->
        <!-- TODO: ADD FONTAWESOME ICONS -->
        <div class="flex w-1/5 justify-between mb-3 ">
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
