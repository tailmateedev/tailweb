<template>
  <section class="bg-gray-900 py-16 flex flex-col items-center min-h-10 px-4 md:px-16" ref="section">
    <h1 class="text-4xl font-bold text-white mb-12 opacity-0 transition duration-1000 ease-out"
      :class="{ 'opacity-100 translate-x-0': isVisible }">
      Funciones
    </h1>

    <div
      class="flex flex-col md:flex-row max-sm:gap-4 divide-opacity-40 items-center gap-12 max-w-7xl justify-center w-full">
      <div class="flex-1 flex flex-col gap-6 min-md:space-y-0 w-full">
        <div v-for="(step, index) in steps" :key="index"
          class="bg-gray-800 shadow-md p-6 rounded-lg opacity-0 transition duration-1000 ease-out cursor-pointer"
          :style="{ transitionDelay: `${0.1}s` }"
          :class="{ 'opacity-100 translate-x-0': isVisible, 'bg-green-500 ': index == idStep, 'max-md:hidden': index != idStep }"
          @click.prevent="select" :id="index">
          <h2 class="text-lg font-semibold text-white" :id="index">{{ step.title }}</h2>
          <p class="text-gray-200" :id="index">{{ step.description }}</p>
        </div>
        <div class="hidden max-md:flex max-md:content-center max-md:justify-center max-md:items-center ">
          <Slider :countElements="steps.length" :next="next" :prev="prev" :idCard="idStep" :select="select"
            colorBg="#fff" colorFocus='bg-white' colorInactive='bg-gray-800' @keydown="checkSlide($event)"></Slider>
        </div>
      </div>

      <div class="flex-1 opacity-0 transition duration-1000 ease-out"
        :class="{ 'opacity-100 translate-y-0': isVisible }" :style="{ transitionDelay: `${0.3}s` }">
        <img :src="steps[idStep].img" alt="Illustration" class="rounded-lg shadow-lg w-full" />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import Slider from "@components/ui/Slider.vue";

export default {
  name: "HowItWorksSection",
  mounted() {
    this.changeStep();
  },
  components:{
    Slider
  },
  methods: {
    select(event) {
      this.isActive = true;
      this.idStep = parseInt(event.target.id);
      this.stopInterval();
    },
    next() {
      this.idStep++;
      if (this.idStep > this.steps.length - 1) {
        this.idStep = 0;
      }
      this.stopInterval();
    },
    prev() {
      this.idStep--;
      if (this.idStep <0) {
        this.idStep = this.steps.length - 1;
      }
      this.stopInterval();
    },
    changeStep() {
      this.interval = setInterval(() => {
        this.next();
      }, 10000);
    },
    stopInterval() {
      clearInterval(this.interval);
      this.isActive = false;
      this.changeStep();
    }
  }, data() {
    const idStep = ref(0);
    return {
      idStep,
    };
  },
  setup() {
    const section = ref(null);
    const isVisible = ref(false);
    const isActive = ref(false);

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
        title: "Asistente Virtual con IA",
        description:
          "Interactúa con un bot inteligente que entiende y responde a tus necesidades.",
        img: "https://picsum.photos/id/230/600/300",
      },
      {
        title: "Consulta Horarios en Tiempo Real",
        description:
          "Gracias a la IA, obtén información actualizada al instante.",
        img: "https://picsum.photos/id/231/600/300",
      },
      {
        title: "Agenda Citas de Manera Inteligente",
        description:
          "La IA sugiere horarios óptimos basados en tus preferencias y disponibilidad.",
        img: "https://picsum.photos/id/232/600/300",
      },
      {
        title: "Respuestas Personalizadas",
        description:
          "La IA aprende de tus interacciones para ofrecerte una experiencia cada vez más personalizada.",
        img: "https://picsum.photos/id/233/600/300",
      },
      {
        title: "Historial de Consultas",
        description:
          "Accede a un registro detallado de tus consultas y recomendaciones.",
        img: "https://picsum.photos/id/234/600/300",
      }
    ];

    return {
      section,
      isVisible,
      steps,
      interval: null,
      isActive
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
