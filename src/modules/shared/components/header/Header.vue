<template>
  <header class="bg-white shadow-sm fixed w-full top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <a href="/">
          <img
          src="/src/assets/icons/logotipo-positivo.svg"
          alt="TailMatee Logo"
          class="h-10 md:h-10 object-contain"
          />
        </a>
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            class="text-gray-600 hover:text-gray-900 transition-all duration-300 py-2 relative group"
            :aria-label="`Navigate to ${item.label}`"
          >
            {{ item.label }}
            <span
              class="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
            ></span>
          </a>
        </div>

        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          @click="toggleMenu"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            class="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-300"
            :aria-label="`Navigate to ${item.label}`"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Header",
  setup() {
    const isOpen = ref(false);
    const menuItems = [
      { id: 1, label: "Home", href: "/" },
      { id: 2, label: "Business", href: "/business" },
      { id: 3, label: "Contact", href: "/contact" },
    ];

    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      menuItems,
      toggleMenu,
    };
  },
};
</script>
