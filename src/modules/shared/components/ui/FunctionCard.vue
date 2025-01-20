<template>
    <div class="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
      <img :src="image" alt="Function Image" class="rounded-md mb-4" />
      <h2 class="text-xl font-semibold text-white mb-2">{{ title }}</h2>
      <p class="text-gray-400 mb-4">
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
    },
  };
</script>
