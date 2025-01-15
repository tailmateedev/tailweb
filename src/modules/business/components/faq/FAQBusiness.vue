<template>
  <section id="faq" class="bg-gray-50 py-16">
    <div class="max-w-4xl max-w-full px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">FAQ</h2>
        <p class="mt-4 text-lg text-gray-600">Preguntas frecuentes</p>
      </div>

      <div class="mt-12">
        <div class="space-y-5 w-full columns-5 max-sm:columns-1 max-md:columns-1 max-lg:columns-2 max-xl:columns-3 max-2xl:columns-3">
          <div v-for="(item, index) in faqItems" :key="index" class="bg-white shadow-sm rounded-lg overflow-hidden">
            <button
              class="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-300"
              @click="toggleFAQ(index)">
              <h4>{{ item.question }}</h4>
              <svg class="w-5 h-5 text-gray-500 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" :class="{ 'rotate-180': activeFAQ === index }">
                <path fill-rule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <transition name="fade-slide" enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-300 ease-in">
              <div v-show="activeFAQ === index" class="px-6 py-4 text-gray-700 border-t border-gray-200">
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
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
      faqItems: [
        {
          question: "¿Cómo accedo a la red de usuarios de Tailmatee Business?",
          answer:
            "Tailmatee Business te conecta con usuarios cercanos que buscan servicios como los que ofrece tu empresa, generando una lista de contactos segmentada.",
        },
        {
          question: "¿Cómo funciona la generación de recetas digitales?",
          answer:
            "Puedes crear recetas médicas desde la app con firma digital, lo que facilita el seguimiento y administración de medicamentos.",
        },
        {
          question:
            "¿Qué tipo de servicios puedo promocionar con Tailmatee Business?",
          answer:
            "Veterinaria, grooming, entrenamiento y cuidados temporales. La plataforma te conecta con usuarios que buscan estos servicios en su zona.",
        },
        {
          question: "¿Cómo puedo gestionar mis citas y clientes?",
          answer:
            "Tailmatee Business te permite gestionar tus citas y clientes de forma sencilla y eficiente, todo desde una sola plataforma.",
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    },
  },
};
</script>

<style scoped>
/* Transition for smooth opening and closing */
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
