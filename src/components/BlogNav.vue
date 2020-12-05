<template>
  <nav
    class="fixed top-0 w-full z-50 bg-gray-600 h-12 flex justify-between px-4"
  >
    <div class="p-1 pt-3">
       <g-link to="/" class="text-gray-100 text-lg font-logo">
          h3c70r
        </g-link>
    </div>
    <div class="pt-3">
      <g-link to="/" class="mr-2 text-gray-200 hover:bg-black rounded p-2">Home</g-link>
    </div>
  </nav>
</template>

<script>
import Logo from '../assets/svgs/Logo.svg'

export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false,
      isHidden: false,
    }
  },
  component: {
    Logo,
  },
}
</script>

<style>
/* .g-link-exact-active {
    border: 1px solid black;
  } */
</style>
