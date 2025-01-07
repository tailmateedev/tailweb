<template>
  <section id="faq" class="bg-gray-50 py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">FAQ</h2>
        <p class="mt-4 text-lg text-gray-600">Preguntas frecuentes</p>
      </div>

      <div class="mt-12">
        <div class="space-y-6">
          <div v-for="(item, index) in faqItems" :key="index" class="bg-white shadow-sm rounded-lg">
            <button
              class="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
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
          question:
            "¿Cómo funciona la aplicación de citas a través de WhatsApp?",
          answer:
            "Nuestra aplicación utiliza inteligencia artificial para permitirte agendar, reprogramar o cancelar citas con tu veterinario directamente desde WhatsApp. Simplemente envía un mensaje al número proporcionado y sigue las instrucciones del asistente virtual.",
        },
        {
          question: "¿Necesito descargar alguna aplicación adicional?",
          answer:
            "No, no es necesario descargar ninguna aplicación adicional. Todo funciona a través de WhatsApp, una plataforma que ya conoces y utilizas diariamente.",
        },
        {
          question: "¿Puedo consultar los horarios disponibles en tiempo real?",
          answer:
            "¡Claro que sí! Nuestro asistente de IA te proporcionará los horarios disponibles en tiempo real para que elijas el que mejor se adapte a tus necesidades.",
        },
        {
          question: "¿Cómo recibo recordatorios de mis citas?",
          answer:
            "Recibirás notificaciones automáticas a través de WhatsApp que te recordarán la fecha y hora de tus citas programadas.",
        },
        {
          question: "¿Puedo cancelar o reprogramar una cita?",
          answer:
            "Por supuesto. Puedes cancelar o reprogramar tus citas en cualquier momento interactuando con el asistente virtual en WhatsApp.",
        },
        {
          question: "¿Tiene algún costo utilizar este servicio?",
          answer:
            "El servicio es completamente gratuito para los usuarios.",
        },
        {
          question: "¿Qué hago si el asistente de IA no entiende mi solicitud?",
          answer:
            "Nuestro asistente de IA está en constante aprendizaje. Si encuentras alguna dificultad, puedes intentar reformular tu pregunta o contactar directamente al soporte de tailmatee",
        },
        {
          question: "¿Puedo usar este servicio en cualquier momento?",
          answer:
            "Sí, el asistente de IA está disponible las 24 horas del día, los 7 días de la semana, para atender tus consultas y ayudarte a gestionar tus citas. :)",
        },
        {
          question: "¿Qué tipo de consultas puedo realizar a través del asistente?",
          answer:
            "Puedes consultar horarios, servicios disponibles, precios básicos y cualquier otra información que el negocio haya configurado en el asistente de IA.",
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
