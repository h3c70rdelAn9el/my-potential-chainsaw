<template>
  <nav
    class="fixed top-0 w-full bg-gray-600 opacity-75 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center"
  >
    <div class="z-20 flex items-center justify-between w-full px-4 py-3 sm:p-0">
      <div>
        <!-- TODO: TURN LOGO INTO AN SVG FILE TO COTNROL COLOR -->
        <g-link to="/">
          <img
            class="h-16 text-green-600 w-50"
            src="../assets/images/hdalogowhite.png"
            alt=""
          />
        </g-link>
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="text-gray-300 hover:text-white focus:text-white focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <div
        :class="isOpen ? 'hidden' : 'hidden'"
        class="px-2 pt-2 pb-4 z-100 sm:flex sm:p-0"
      >
        <a
          href="/#header"
          v-scroll-to="'#header'"
          class="block px-2 py-1 text-white rounded sm:inline-block hover:bg-gray-800"
        >
          Home
        </a>
        <a
          href="/#about"
          v-scroll-to="'#about'"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Bio
        </a>
        <a
          href="/#projects"
          v-scroll-to="'#projects'"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Projects
        </a>
        <g-link
          to="/blog"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Blog
        </g-link>
        <a
          href="/#contact"
          v-scroll-to="'#contact'"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Contact
        </a>
      </div>
    </div>
    <!-- Overlay -->
    <button
      v-if="isOpen"
      class="fixed inset-0 w-full h-full bg-black cursor-default z-100"
      @click="isOpen = false"
    >
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="z-20 px-2 pt-2 pb-4 sm:flex sm:p-0"
      >
        <a
          href="/#header"
          v-scroll-to="'#header'"
          class="block px-2 py-1 text-white rounded sm:inline-block hover:bg-gray-800"
        >
          Top
        </a>
        <a
          href="/#about"
          v-scroll-to="'#about'"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >Bio</a
        >
        <a
          href="/#projects"
          v-scroll-to="'#projects'"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
          >Projects</a
        >
        <g-link
          to="/blog"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Blog
        </g-link>
        <a
          href="/#contact"
          v-scroll-to="'#contact'"
          class="block px-2 py-1 mt-1 text-white rounded sm:inline-block hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Contact
        </a>
      </div>
    </button>
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
    Logo
  }
}
</script>

<style>
/* .g-link-exact-active {
    border: 1px solid black;
  } */
</style>
