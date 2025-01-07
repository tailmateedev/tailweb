<template>
  <section class="bg-gray-900 py-16 flex flex-col items-center min-h-10 px-4 md:px-16" ref="section">
    <h1 class="text-4xl font-bold text-white mb-12 opacity-0 transition duration-1000 ease-out"
      :class="{ 'opacity-100 translate-x-0': isVisible }">
      Cómo Funciona
    </h1>

    <div class="flex flex-col md:flex-row items-start gap-16 max-w-7xl w-full">
      <div class="flex-1 space-y-6">
        <div v-for="(step, index) in steps" :key="index"
          class="bg-gray-800 shadow-md p-6 rounded-lg opacity-0 transition duration-1000 ease-out"
          :style="{ transitionDelay: `${(index + 1) * 0.5}s` }" :class="{ 'opacity-100 translate-x-0': isVisible }">
          <h2 class="text-lg font-semibold text-white">{{ step.title }}</h2>
          <p class="text-gray-300">{{ step.description }}</p>
        </div>
      </div>

      <div class="flex-1 opacity-0 translate-y-10 transition duration-1000 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible }"
        :style="{ transitionDelay: `${(steps.length + 1) * 0.5}s` }">
        <img src="https://via.placeholder.com/600x400" alt="Illustration" class="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "HowItWorksSection",
  setup() {
    const section = ref(null);
    const isVisible = ref(false);

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

    const steps = [
      {
        title: "Paso 1",
        description: "Envía un mensaje a nuestro número de WhatsApp.",
      },
      {
        title: "Paso 2",
        description: "Consulta horarios y agenda tu cita.",
      },
      {
        title: "Paso 3",
        description: "Recibe confirmación y recordatorios automáticos.",
      },
      {
        title: "Paso 4",
        description: "Recibe confirmación y recordatorios automáticos.",
      },
    ];

    return {
      section,
      isVisible,
      steps,
    };
  },
};
</script>

<style scoped>
/* Prevent any horizontal overflow */
section {
  overflow-x: hidden;
}
</style>
