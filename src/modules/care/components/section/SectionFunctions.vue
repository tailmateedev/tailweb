<template>
  <section class="bg-gray-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-bold">Funcionalidades Principales</h2>
        <p class="text-gray-300 mt-2">
          Descubre las principales características que Tailmatee tiene para ofrecer.
        </p>
      </div>

      <div class="space-y-6">
        <div v-for="(item, index) in functionalities" :key="index"
          class="bg-gray-700 rounded-lg shadow px-6 py-4 w-full">
          <button class="w-full flex justify-between items-center text-left hover:bg-gray-600 focus:outline-none p-3"
            @click="toggleFunctionality(index)">
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <svg class="w-6 h-6 text-gray-400 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20" fill="currentColor" :class="{ 'rotate-180': activeFunctionality === index }">
              <path fill-rule="evenodd"
                d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="activeFunctionality === index" class="border-t border-gray-600 text-gray-300 mt-2 pt-2">
            <p>{{ item.description }}</p>
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
      activeFunctionality: null,
      functionalities: [
        {
          title: "Agendamiento de Citas",
          description:
            "Reserva citas en veterinarias, grooming y otros servicios.",
        },
        {
          title: "Mascotas Perdidas",
          description:
            "Publica información sobre mascotas perdidas con detalles como foto, nombre y lugar de pérdida. Los usuarios cercanos pueden ayudarte a encontrar a tu mascota.",
        },
        {
          title: "TailPoints",
          description:
            "Gana puntos al utilizar Tailmatee y cámbialos por recompensas.",
        },
        {
          title: "Carnet Digital",
          description:
            "Lleva el historial médico y de vacunación de tu mascota en tu smartphone, con acceso rápido y fácil.",
        },
      ],
    };
  },
  methods: {
    toggleFunctionality(index) {
      this.activeFunctionality = this.activeFunctionality === index ? null : index;
    },
  },
};
</script>
