<template>
    <div>
      <button
        @click="toggleModal"
        :class="buttonClass"
        type="button"
      >
        {{ buttonLabel }}
      </button>
  
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
      >
        <div class="relative w-full max-w-full sm:max-w-md bg-[#11113A] rounded-lg shadow-md mx-4 sm:mx-0">
          <div class="flex items-center justify-between p-4 sm:p-5 border-b border-gray-600">
            <h3 class="text-base sm:text-lg font-bold font-[Montserrat] text-white">
              Contactos
            </h3>
            <button
              @click="toggleModal"
              class="text-gray-400 hover:text-gray-900 hover:bg-red-400 p-1 rounded-lg"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1l6 6m0 0l6 6M7 7L1 13M7 7L13 1"
                />
              </svg>
            </button>
          </div>
  
          <div class="p-4 sm:p-5">
            <p class="text-sm sm:text-base text-gray-400 mb-4">
              Seleccione una opción
            </p>
            <ul class="space-y-4">
              <li
                v-for="option in options"
                :key="option.id"
              >
                <input
                  :id="option.id"
                  type="radio"
                  name="job"
                  class="hidden peer"
                />
                <label
                  :for="option.id"
                  class="flex items-center space-x-3 p-4 sm:p-5 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
                  @click="redirectToPage(option.url)"
                  >
                  <div v-html="option.svg" class="flex-shrink-0 w-12 h-12"></div>
                  <div class="flex-1">
                    <div class="text-sm sm:text-base text-gray-500">
                      {{ option.label }}
                  </div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      buttonClass: {
        type: String,
        default:
          "block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
      },
      buttonLabel: {
        type: String,
        default: "Toggle modal",
      },
    },
    data() {
      return {
        isModalOpen: false,
      };
    },
    methods: {
      toggleModal() {
        this.isModalOpen = !this.isModalOpen;
      },

      redirectToPage(url){

        window.open(url, '_blank')

      }

    },
  };
  </script>
  