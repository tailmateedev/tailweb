<template>
  <section class="py-16 flex flex-col items-center gap-5 content-center">
    <h1 class="text-4xl font-bold text-black content-center">Lorem ipsum dolor sit</h1>
    <div class="flex flex-row md:max-w-6xl gap-9 px-4">
      <template v-for="(card, index) in cards" :key="index" :image="card.image" :title="card.title"
        :description="card.description" :link="card.link">
        <FunctionCard :image="card.image" :title="card.title" :description="card.description" :link="card.link" :is-visible="true" :class="index === idCard ? '' : 'blur-sm max-sm:hidden'"/>
      </template>
    </div>
    <Slider :countElements="getQuantityElements" :next="next" :prev="prev" :idCard="idCard" :select="select"
    :colorBg="bgColorsArrow" :colorFocus="'bg-black'" :colorInactive="'bg-gray-500'" @keydown="checkSlide($event)"></Slider>
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
    const bgColorsArrow ={ bgRight: "border-r-slate-700", bgLeft: "border-l-slate-700" };
    return {
      idCard,
      intervalId: null,
      bgColorsArrow
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

    select(id) {
      this.idCard = id;
      this.stopChangeCard();
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
      }, 7500);
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
        title: "Paso 1",
        description: "Envía un mensaje a nuestro número de WhatsApp.",
        link: "#"
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Paso 2",
        description: "Consulta horarios y agenda tu cita de manera sencilla.",
        link: "#"
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Paso 3",
        description: "Recibe confirmación y recordatorios automáticos.",
        link: "#",
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Paso 4",
        description: "Recibe confirmación y recordatorios automáticos.",
        link: "#",
      },
    ];
    return {
      cards,
    };
  },
};
</script>
