<template>
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl h-full max-w-sm" v-show="isVisible" >
      <img :src="image" alt="Function Image" class="rounded w-full" />
      <h2 class="text-xl font-semibold text-white mb-2">{{ title }}</h2>
      <p class="text-gray-400 w-full h-full">
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
