<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <div class="text-center p-5">
        <h1 class="text-4xl font-bold text-gray-800 md:text-4xl">
            ¿TE INTERESA FORMAR PARTE?
        </h1>
        <p class="mt-6 text-lg text-gray-600 md:text-xl wave-text" transition:name="text-animated">
            Puedes contactarnos a través de Whatsapp 🤩 o enviarnos un correo electrónico 📧.
        </p>
        <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://wa.me/50212345678?text=Me%20interesa%20formar%20parte%20de%20tailmatee" class="float-wa"
                target="_blank">
                <i class="fa fa-whatsapp size-full  min-h-8 max-w-sm" style="margin-top:16px;"></i>
            </a>
            <a href="mailto:hola@example.com?subject=Me%20interesa%20formar%20parte%20de%20tailmatee"
                class="px-6 py-3 bg-emerald-400 text-gray-800 font-semibold rounded-lg hover:bg-blue-300 transition">
                Enviar correo 📩
            </a>
        </div>
    </div>
</template>
<script>

</script>
<style>
.float-wa {
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    z-index: 100;
}

.wave-text {
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  animation: wave 2s infinite;
}

@keyframes wave {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

::view-transition-old(text-animated) {
  animation: fade-out 0.5s;
}

::view-transition-new(text-animated) {
  animation: fade-in 0.5s;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>