<template>
    <div class="bg-[#11113A] p-5 rounded-lg shadow-lg hover:shadow-xl flex flex-col items-center gap-2
      max-h-full"
    v-show="isVisible" > 
      <img :src="image" alt="Function Image" class="rounded w-full" />
      <h2 class="text-xl font-semibold text-white mb-2">{{ title }}</h2>
      <p class="text-white content-center text-center max-h-44 min-h-20 max-w-sm" >
        {{ description }}
      </p>
    </div>
  </template>

<script>
  export default {
    name: "FunctionCard",
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: false,
        default: "#",
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      }
    },
  };
</script>
