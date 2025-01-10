<script>
export default {

  props: {
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full bg-[#11113A] text-white text-lg flex items-center justify-center hover:bg-[#0f0f2a] focus:outline-none p-1 mx-2"
    >
      <span v-html="icon" class="text-center"></span>
    </a>
  </div>
</template>