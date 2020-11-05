<template>
<div class=" -mt-96 w-full bg-cover bg-center overflow-visible " :style="{'background-image': `url(${require('../assets/images/keyboard.jpeg')})`}">
  <div class="flex h-screen w-full" style="background-color:rgba(0,0,0,0.6)">
    <slot />
  </div>
</div>
</template>
