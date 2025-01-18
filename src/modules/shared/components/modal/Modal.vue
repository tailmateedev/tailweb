<template>
    <div>

        <div class="fixed bottom-4 right-4 z-50">
            <a 
                @click="toggleModal" 
                class="font-semibold rounded-full text-gray-900 bg-[#11113A] hover:bg-[#11113A] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-[Montserrat] text-sm px-4 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:border-gray-700 dark:text-white 
                        md:px-6 md:py-3 md:text-base md:rounded-full"
            >
                Contactanos
            </a>
        </div>
  
      <div v-if="isModalVisible" 
           @click.self="toggleModal"
           class="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
      >
        <div class="relative p-4 w-full max-w-md max-h-full bg-[#11113A] font-[Montserrat] rounded-lg shadow">

          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">
              Medios de Contacto
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
            <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Puedes contarctarnos mediante nuestro correo o whatsapp, sera un gusto resolver tus dudas</p>
            <ul class="my-4 space-y-3">
              <li v-for="option in walletOptions" :key="option.id">
                <a :href="option.href"
                    target="_blank"
                   class="flex items-center justify-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
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
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="md:mr-2 w-8 h-8 text-green-500 fill-current"><path d="M16.001 3.001c-7.18 0-13 5.82-13 13 0 2.3.6 4.48 1.73 6.42l-1.81 5.46 5.64-1.78a12.978 12.978 0 0 0 7.44 2.4c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.02c-2.36 0-4.67-.68-6.64-1.97l-.47-.3-3.35 1.06 1.06-3.27-.31-.5a10.966 10.966 0 0 1-1.79-6.04c0-6.07 4.93-11 11-11s11 4.93 11 11-4.93 11-11 11zm6.28-7.76c-.34-.17-2.01-.99-2.32-1.1-.31-.12-.54-.17-.77.17-.22.34-.88 1.1-1.08 1.32-.2.22-.4.25-.74.08-.34-.17-1.44-.54-2.74-1.73-1.01-.9-1.69-2.02-1.88-2.36-.2-.34-.02-.52.15-.7.15-.15.34-.4.51-.6.17-.2.22-.34.34-.56.11-.22.06-.42-.03-.59-.08-.17-.77-1.86-1.06-2.56-.28-.68-.57-.59-.77-.6-.2 0-.42-.01-.65-.01-.22 0-.6.09-.91.42-.31.34-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.22 2.43 3.72 5.89 5.21.82.35 1.46.56 1.96.71.82.26 1.56.22 2.14.13.65-.1 2.01-.82 2.3-1.61.28-.79.28-1.47.2-1.61-.08-.13-.31-.2-.65-.37z"/></svg>',
            href: 'https://wa.me/50212345678?text=Me%20interesa%20formar%20parte%20de%20tailmatee'
        },
          {
            id: 2,
            label: "Correo",
            svg: '<svg xmlns="http://www.w3.org/2000/svg" class="md:w-[30px] md:h-[30px] md:mr-4 fill-current" viewBox="0 0 512 512"><g transform="translate(0,512) scale(0.1,-0.1)"><path d="M422 4434 c-29 -7 -66 -21 -83 -29 l-30 -16 1068 -1075 c605 -609 1084 -1084 1105 -1095 46 -23 112 -24 154 -1 33 18 2204 2137 2204 2152 0 12 -82 48 -147 65 -84 22 -4190 21 -4271 -1z"/><path d="M41 4098 c-11 -29 -25 -75 -31 -103 -7 -34 -10 -515 -8 -1465 l3 -1415 27 -68 c14 -38 29 -71 32 -75 4 -3 273 260 599 585 328 328 605 597 620 603 76 28 166 -8 204 -80 27 -50 29 -86 8 -138 -11 -26 -195 -216 -602 -623 l-586 -587 31 -16 c93 -48 5 -46 2222 -46 2217 0 2129 -2 2222 46 l31 16 -590 591 c-627 628 -623 623 -610 703 17 105 126 170 224 134 15 -6 292 -275 621 -603 471 -470 594 -589 602 -577 5 8 20 44 32 80 l23 65 0 1435 c0 1347 -1 1439 -18 1493 -10 31 -22 57 -27 57 -5 0 -498 -478 -1095 -1062 -598 -585 -1111 -1080 -1141 -1100 -161 -109 -387 -108 -553 3 -40 27 -431 413 -1133 1120 -590 593 -1076 1079 -1079 1079 -4 0 -16 -24 -28 -52z"/></g></svg>',
            href: 'mailto:hola@example.com?subject=Me%20interesa%20formar%20parte%20de%20tailmatee'
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
  