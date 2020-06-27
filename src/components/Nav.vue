<template>
  <nav class="bg-gray-900 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <h2 class="text-gray-300">Hector del Angel</h2>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" class="text-gray-300 hover:text-white focus:text-white focus:outline-none">
      
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
      <g-link class=" block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800" to="/">Home</g-link>
      <g-link class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" to="/about">About</g-link>
        <g-link class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" to="/projects">Projects</g-link>
      <g-link class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" to="/blog">Blog</g-link>
      <g-link class="mt-1 block sm:inline-block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2" to="/contact">Contact</g-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isOpen: false
    }
  },
}
</script>
