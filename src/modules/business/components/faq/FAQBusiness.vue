<template>
  <section id="faq" class="bg-[#11113A] py-16">
    <div class="max-w-4xl max-w-full px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">FAQ</h2>
        <p class="mt-4 text-lg text-white">Preguntas frecuentes</p>
      </div>

      <!-- Versión Desktop -->
      <div class="hidden lg:mt-12 lg:grid lg:gap-6 lg:grid-cols-4 lg:justify-items-center">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-white shadow-sm rounded-lg overflow-hidden w-full"
        >
          <button
            class="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-300"
            @click="toggleFAQ(index)"
          >
            <h4>{{ item.question }}</h4>
            <svg
              class="w-5 h-5 text-gray-500 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="{ 'rotate-180': activeFAQ === index }"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <transition
            name="fade-slide"
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
          >
            <div
              v-show="activeFAQ === index"
              class="px-6 py-4 text-gray-700 border-t border-gray-200"
            >
              <p>{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>

      <!-- Versión Mobile -->
      <div class="block lg:hidden mt-12 flex flex-col items-center">
        <!-- Flecha de navegación hacia arriba (prevPage) solo si no es la primera vista -->
        <div v-if="currentMobileIndex > 0" class="mb-4">
          <button
            @click="prevPage"
            class="p-2 bg-gray-200 rounded-full focus:outline-none"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 4a1 1 0 01.707.293l5 5a1 1 0 11-1.414 1.414L11 7.414V16a1 1 0 11-2 0V7.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5A1 1 0 0110 4z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="w-full">
          <div class="space-y-4">
            <div
              v-for="(item, i) in mobileItems"
              :key="currentMobileIndex + i"
              class="bg-white shadow-sm rounded-lg overflow-hidden"
            >
              <button
                class="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-300"
                @click="toggleFAQ(currentMobileIndex + i)"
              >
                <h4>{{ item.question }}</h4>
                <svg
                  class="w-5 h-5 text-gray-500 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  :class="{ 'rotate-180': activeFAQ === (currentMobileIndex + i) }"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <transition
                name="fade-slide"
                enter-active-class="transition-all duration-300 ease-out"
                leave-active-class="transition-all duration-300 ease-in"
              >
                <div
                  v-show="activeFAQ === (currentMobileIndex + i)"
                  class="px-6 py-4 text-gray-700 border-t border-gray-200"
                >
                  <p>{{ item.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <!-- Flecha de navegación hacia abajo (nextPage) solo si no es la última vista -->
        <div v-if="currentMobileIndex + 3 < faqItems.length" class="mt-4">
          <button
            @click="nextPage"
            class="p-2 bg-gray-200 rounded-full focus:outline-none"
          >
            <svg
              class="w-6 h-6 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 16a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L9 12.586V4a1 1 0 112 0v8.586l3.293-3.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 16z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeFAQ: null,
      currentMobileIndex: 0,
      faqItems: [
        {
          question:
            "¿Cómo accedo a la red de usuarios de Tailmatee Business?",
          answer:
            "Tailmatee Business te conecta con usuarios cercanos que buscan servicios como los que ofrece tu empresa, generando una lista de contactos segmentada."
        },
        {
          question: "¿Cómo funciona la generación de recetas digitales?",
          answer:
            "Puedes crear recetas médicas desde la app con firma digital, lo que facilita el seguimiento y administración de medicamentos."
        },
        {
          question:
            "¿Qué tipo de servicios puedo promocionar con Tailmatee Business?",
          answer:
            "Veterinaria, grooming, entrenamiento y cuidados temporales. La plataforma te conecta con usuarios que buscan estos servicios en su zona."
        },
        {
          question: "¿Cómo puedo gestionar mis citas y clientes?",
          answer:
            "Tailmatee Business te permite gestionar tus citas y clientes de forma sencilla y eficiente, todo desde una sola plataforma."
        },
        {
          question: "¿Cómo es el soporte técnico?",
          answer:
            "El soporte técnico está disponible 24/7 para resolver cualquier inconveniente."
        },
        {
          question: "¿Puedo integrar mis sistemas actuales?",
          answer:
            "Sí, Tailmatee Business ofrece integraciones con múltiples sistemas para facilitar la transición."
        },
        {
          question: "Prueba",
          answer:
            "Prueba si funciona"
        }
      ]
    };
  },
  computed: {
    mobileItems() {
      return this.faqItems.slice(this.currentMobileIndex, this.currentMobileIndex + 3);
    }
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    },
    nextPage() {
      if (this.currentMobileIndex + 3 < this.faqItems.length) {
        this.currentMobileIndex += 3;
      }
      this.activeFAQ = null;
    },
    prevPage() {
      if (this.currentMobileIndex > 0) {
        this.currentMobileIndex -= 3;
      }
      this.activeFAQ = null;
    }
  }
};
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>