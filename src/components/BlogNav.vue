<template>
  <nav
    class="fixed top-0 w-full z-50 bg-gray-600 flex justify-between px-4"
  >
    <div class="p-1">
      <g-link to="/">
        <img
          class="h-16 text-green-600 w-50"
          src="../assets/images/hdalogowhite.png"
          alt=""
        />
      </g-link>
    </div>
    <div class="pt-6">
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
