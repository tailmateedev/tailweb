<template>
  <section class="py-16 flex flex-col items-center gap-5 content-center">
    <h1 class="text-4xl font-bold text-black content-center">¿Cómo funciona?</h1>
    <div class="gap-9 max-w-4xl px-4">
      <template v-for="(card, index) in cards" :key="index" :image="card.image" :title="card.title"
        :description="card.description" :link="card.link">
        <FunctionCard :image="card.image" :title="card.title" :description="card.description" :link="card.link"
          :is-visible="(index === idCard) ? true : false" />
      </template>
    </div>
    <Slider :countElements="getQuantityElements" :next="next" :prev="prev" :idCard="idCard" :select="select"
      :colorBg="'#11113A'" colorFocus='bg-black' colorInactive='bg-gray-400' @keydown="checkSlide($event)"></Slider>
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
