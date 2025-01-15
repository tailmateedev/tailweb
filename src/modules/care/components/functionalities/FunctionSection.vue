<template>
  <section class="bg-gray-900 py-16 flex flex-col items-center gap-5 h-full">
    <h1 class="text-4xl font-bold text-white">Funciones</h1>
    <div class="gap-9 max-w-4xl px-4">
      <template v-for="(card, index) in cards" :key="index" :image="card.image" :title="card.title"
        :description="card.description" :link="card.link">
        <FunctionCard :image="card.image" :title="card.title" :description="card.description" :link="card.link"
          :is-visible="(index === idCard) ? true : false" />
      </template>
    </div>
    <Slider :countElements="getQuantityElements" :next="next" :prev="prev" :idCard="idCard" :select="select"
      @keydown="checkSlide($event)"></Slider>
  </section>
</template>

<script>
import FunctionCard from "@components/ui/FunctionCard.vue";
import Slider from "@components/ui/Slider.vue";
import { ref } from "vue";

export default {
  name: "DarkCardSection",
  components: {
    FunctionCard,
    Slider
  },
  computed: {
    getQuantityElements() {
      return this.cards.length;
    },
  }, data() {
    let idCard = ref(0);
    return {
      idCard,
      intervalId: null
    }
  },
  mounted() {
    this.changeCard();
  },
  methods: {
    next() {
      this.stopChangeCard();
      this.idCard++;
      if (this.idCard > this.getQuantityElements - 1) {
        this.idCard = 0;
      }
    },
    prev() {
      this.stopChangeCard();
      this.idCard--;
      if (this.idCard < 0) {
        this.idCard = this.getQuantityElements-1;
      }
    },
    select(event) {
      this.stopChangeCard();
      this.idCard = parseInt(event.target.id);
    },
    checkSlide(event) {
      if (event.keyCode === 39) {
        this.next();
      }
      if (event.keyCode === 37) {
        this.prev();
      }
    },
    changeCard() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000);
    },
    stopChangeCard() {
      clearInterval(this.intervalId);
      this.changeCard();
    }
  },
  setup() {
    const cards = [
      {
        image: "https://via.placeholder.com/300x200",
        title: "Asistente Virtual con IA",
        description:
          "Interactúa con un bot inteligente que entiende y responde a tus necesidades.",
        link: "#"
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Consulta Horarios en Tiempo Real",
        description:
          "Gracias a la IA, obtén información actualizada al instante.",
        link: "#"
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Agenda Citas de Manera Inteligente",
        description:
          "La IA sugiere horarios óptimos basados en tus preferencias y disponibilidad.",
        link: "#",
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Respuestas Personalizadas",
        description:
          "La IA aprende de tus interacciones para ofrecerte una experiencia cada vez más personalizada.",
        link: "#",
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Historial de Consultas",
        description:
          "Accede a un registro detallado de tus consultas y recomendaciones.",
        link: "#",
      }
    ];
    return {
      cards,
    };
  },
};
</script>
