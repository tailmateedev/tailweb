<template>
    <div>

      <a 
        @click="toggleModal" 
        class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
      >
        Contactanos
      </a>
  
      <div v-if="isModalVisible" 
           @click.self="toggleModal"
           class="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
      >
        <div class="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">

          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Contactanos
            </h3>
            <a
               @click="toggleModal" 
               class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </a>
          </div>

          <div class="p-4 md:p-5">
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Contactanos mediante nuestro correo o whatsapp, sera un gusto resolver tus dudas</p>
            <ul class="my-4 space-y-3">
              <li v-for="option in walletOptions" :key="option.id">
                <a :href="option.href"
                    target="_blank"
                   class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                >
                  <span v-html="option.svg"></span>
                  {{ option.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalVisible: false,
        walletOptions: [
          {
            id: 1,
            label: "Whatsapp",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-128 h-128 fill-current text-black"><g transform="translate(0, 512) scale(0.1, -0.1)" fill="currentColor" stroke="none"><path d="M2315 5109 c-800 -83 -1501 -518 -1927 -1196 -604 -960 -491 -2229 272 -3065 423 -463 951 -740 1585 -830 118 -17 511 -16 635 0 579 80 1097 337 1491 739 130 132 157 163 243 277 256 341 423 757 488 1211 17 118 17 512 0 630 -43 303 -122 561 -247 814 -134 268 -270 459 -483 674 -395 400 -889 649 -1457 733 -123 18 -478 26 -600 13z"/><path d="M2505 3868 c-490 -35 -938 -385 -1095 -856 -50 -152 -64 -242 -64 -412 0 -259 49 -432 195 -686 l23 -42 -62 -227 c-34 -125 -61 -230 -58 -232 2 -2 108 24 236 57 l233 62 121 -61 c199 -99 372 -141 587 -141 537 0 1028 354 1198 866 51 155 64 234 64 404 0 122 -5 177 -22 260 -109 511 -511 903 -1021 994 -109 19 -210 23 -335 14z"/></g></svg>',
            href: '/'
        },
          {
            id: 2,
            label: "Correo",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" class="md:w-[30px] md:h-[30px] md:mr-4 fill-current" viewBox="0 0 512 512"><g transform="translate(0,512) scale(0.1,-0.1)"><path d="M422 4434 c-29 -7 -66 -21 -83 -29 l-30 -16 1068 -1075 c605 -609 1084 -1084 1105 -1095 46 -23 112 -24 154 -1 33 18 2204 2137 2204 2152 0 12 -82 48 -147 65 -84 22 -4190 21 -4271 -1z"/><path d="M41 4098 c-11 -29 -25 -75 -31 -103 -7 -34 -10 -515 -8 -1465 l3 -1415 27 -68 c14 -38 29 -71 32 -75 4 -3 273 260 599 585 328 328 605 597 620 603 76 28 166 -8 204 -80 27 -50 29 -86 8 -138 -11 -26 -195 -216 -602 -623 l-586 -587 31 -16 c93 -48 5 -46 2222 -46 2217 0 2129 -2 2222 46 l31 16 -590 591 c-627 628 -623 623 -610 703 17 105 126 170 224 134 15 -6 292 -275 621 -603 471 -470 594 -589 602 -577 5 8 20 44 32 80 l23 65 0 1435 c0 1347 -1 1439 -18 1493 -10 31 -22 57 -27 57 -5 0 -498 -478 -1095 -1062 -598 -585 -1111 -1080 -1141 -1100 -161 -109 -387 -108 -553 3 -40 27 -431 413 -1133 1120 -590 593 -1076 1079 -1079 1079 -4 0 -16 -24 -28 -52z"/></g></svg>',
            href: '/'
          },
        ]
      };
    },
    methods: {
      toggleModal() {
        this.isModalVisible = !this.isModalVisible;
      }
    }
  };
  </script>
  