<template>
  <nav class="bg-[#11113A]">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <a href="/" class="flex items-left justify-left space-x-3 rtl:space-x-reverse">
        <span class="self-center text-5xl font-bold whitespace-nowrap dark:text-white font-[Montserrat] text-left tracking-[-5px]">tailmatee</span>
      </a>

      <a
        href="#"
        @click.prevent="toggleMenu"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#11113A] focus:outline-none focus:ring-2 dark:text-gray-400"
        aria-controls="navbar-default"
        :aria-expanded="isOpen"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </a>

      <div :class="['w-full md:block md:w-auto', { hidden: !isOpen }]">
        <ul
          :class="[ 
            'font-[Montserrat] text-lg flex flex-col p-4 md:p-0 mt-4 border border-transparent rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-transparent',
            isOpen ? 'bg-[#11113A]' : 'bg-transparent',
            'items-center'
          ]"
        >
          <li 
            v-for="(item, index) in menuItems" 
            :key="item.id" 
            class="flex justify-center w-full border-b-2 border-gray-600 md:border-transparent"
            :class="{ 'border-b-0': index === menuItems.length - 1 }"
          >
            <a
              :href="item.href"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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