<template>
  <nav class="shadow-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        
        <div class="flex-shrink-0">
          <img src="../assets/logo.png" alt="logo" class="object-cover h-16 w-16">
        </div>

     
        <div class="-mr-2 flex md:hidden">
          <button 
            @click="isOpen = !isOpen" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Toggle navigation">
            <svg 
              class="h-6 w-6" 
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
              <path 
                class="transition-transform duration-300"
                :class="{ 'rotate-45': isOpen, 'rotate-0': !isOpen }"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16m-7 6h7">
              </path>
            </svg>
          </button>
        </div>

        
        <div class="hidden md:flex space-x-8">
          <a
            v-for="link in links"
            :key="link.text"
            :href="link.href"
            class="text-[#020617] hover:text-gray-500 transition duration-150 ease-in-out"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>

    
    <div 
      class="md:hidden transition-all duration-300"
      :class="{ 'max-h-0 overflow-hidden': !isOpen, 'max-h-screen': isOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="link in links"
          :key="link.text"
          :href="link.href"
          class="block px-3 py-2 rounded-md text-base font-medium text-[#020617] hover:text-gray-500 transition duration-150 ease-in-out"
        >
          {{ link.text }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      links: [
        { text: "Home", href: "#" },
        { text: "Features", href: "#" },
        { text: "Pricing", href: "#" },
        { text: "About", href: "#" },
        { text: "Contact", href: "#" },
      ],
    };
  },
};
</script>

<style scoped>

</style>
