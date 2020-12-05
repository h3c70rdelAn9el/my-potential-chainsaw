<template>
  <footer class="bg-gray-900 p-2">
    <div class="flex justify-between">
      
      <div>
        <p class="text-sm pt-2 text-gray-500">© h3c70r {{ new Date().getFullYear() }}</p>
        <!-- <p class="text-xs text-gray-600">logo made with <a class="hover:text-green-600" href="https://logomakr.com/">logomakr.com</a></p> -->
        
      </div>
      <div class="flex justify-between text-gray-500 ">
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
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>
