<template>
  <nav class="bg-gray-600 opacity-75 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
    <div class="flex w-full z-20 items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <!-- TODO: TURN LOGO INTO AN SVG FILE TO COTNROL COLOR -->
        <!-- TODO: CHECK THE OUTLINE SHADOW -->
        <g-link to="/">
          <img class="w-50 h-16" src="../assets/images/hdalogowhite.png" alt="">
        </g-link>
      </div>
      <div class="sm:hidden">
        <button type="button" class="text-gray-300 hover:text-white focus:text-white focus:outline-none" @click="isOpen = !isOpen">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>

      <div :class="isOpen ? 'hidden' : 'hidden'" class=" z-50 px-2 pt-2 pb-4 sm:flex sm:p-0">
        <g-link to="/" class="block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800">
          Home
        </g-link>
        <g-link to="/bio" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Bio
        </g-link>
        <g-link to="/music" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Music
        </g-link>
        <g-link to="/contact" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Contact
        </g-link>
      </div>
    </div>

    <!-- Overlay -->
    <button v-if="isOpen" class="fixed inset-0 h-full w-full cursor-default bg-black z-100" @click="isOpen = false">
      <div :class="isOpen ? 'block' : 'hidden'" class=" z-100 px-2 pt-2 pb-4 sm:flex sm:p-0">
        <g-link to="/" class="block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800">
          Home
        </g-link>
        <g-link to="/bio" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Bio
        </g-link>
        <g-link to="/music" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Music
        </g-link>
        <g-link to="/contact" class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
          Contact
        </g-link>
      </div>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      isOpen: false,
      isHidden: false
    }
  }
}
</script>

<style>
  /* .g-link-exact-active {
    border: 1px solid black;
  } */
</style>
