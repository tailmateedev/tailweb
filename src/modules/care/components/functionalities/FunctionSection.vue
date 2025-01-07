<template>
  <section class="bg-gray-900 py-16 flex flex-col items-center min-h-screen">
    <h1 class="text-4xl font-bold text-white mb-12">Funciones</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl px-4">
      <FunctionCard v-for="(card, index) in cards" :key="index" :image="card.image" :title="card.title"
        :description="card.description" :link="card.link" />
    </div>
  </section>
</template>

<script>
import FunctionCard from "@components/ui/FunctionCard.vue";

export default {
  name: "DarkCardSection",
  components: {
    FunctionCard,
  },
  setup() {
    const cards = [
      {
        image: "https://via.placeholder.com/300x200",
        title: "Asistente Virtual con IA",
        description:
          "Interactúa con un bot inteligente que entiende y responde a tus necesidades.",
        link: "#",
      },
      {
        image: "https://via.placeholder.com/300x200",
        title: "Consulta Horarios en Tiempo Real",
        description:
          "Gracias a la IA, obtén información actualizada al instante.",
        link: "#",
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
      }
    ];

    return {
      cards,
    };
  },
};
</script>
