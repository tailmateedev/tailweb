<template>
  <section class="py-16 bg-gray-50" ref="section">
    <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
      <!-- Image with Transition -->
      <div class="w-full md:w-1/2 flex justify-center opacity-0 translate-y-10 transition duration-1000 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible }">
        <img src="https://via.placeholder.com/500x400" alt="Beneficio" class="rounded-lg shadow-lg" />
      </div>

      <!-- Benefits List -->
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 opacity-0 transition duration-1000 ease-out"
          :class="{ 'opacity-100 translate-x-0': isVisible }">
          Beneficios
        </h2>
        <ul class="space-y-6">
          <li v-for="(benefit, index) in benefits" :key="index"
            class="flex items-start opacity-0 translate-x-10 transition duration-1000 ease-out"
            :style="{ transitionDelay: `${(index + 1) * 0.5}s` }" :class="{ 'opacity-100 translate-x-0': isVisible }">
            <div class="flex-shrink-0 w-6 h-6 text-green-500 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="w-full h-full">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <p class="text-lg text-gray-700 leading-relaxed">{{ benefit }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "BenefitsSection",
  setup() {
    const section = ref(null);
    const isVisible = ref(false);

    const benefits = [
      "Atención 24/7 con IA: La inteligencia artificial está siempre disponible para ayudarte en cualquier momento.",
      "Interacción Natural: Comunícate con el bot como si fuera un asistente humano gracias al procesamiento de lenguaje natural.",
      "Experiencia Eficiente: La IA acelera el proceso de gestión de citas y consultas.",
      "Aprendizaje Continuo: El sistema mejora constantemente para ofrecerte un mejor servicio.",
    ];

    onMounted(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
          }
        },
        { threshold: 0.1 }
      );

      if (section.value) {
        observer.observe(section.value);
      }
    });

    return {
      section,
      isVisible,
      benefits,
    };
  },
};
</script>

<style scoped>
/* Prevent horizontal overflow */
section {
  overflow-x: hidden;
}

/* Ensure smooth transitions */
.opacity-0 {
  opacity: 0;
}

.translate-y-10 {
  transform: translateY(10px);
}

.translate-x-10 {
  transform: translateX(10px);
}

.opacity-100 {
  opacity: 1;
}

.translate-y-0,
.translate-x-0 {
  transform: translateY(0);
  transform: translateX(0);
}
</style>
