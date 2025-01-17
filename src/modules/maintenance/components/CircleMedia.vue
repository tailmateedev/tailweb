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
    open: {
      type: Boolean,
      required: false,
      default: true
    }
  },
};

</script>

<template>
  <div v-if="open === true">
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-full bg-[#11113A] text-white text-lg flex items-center justify-center hover:bg-[#0f0f2a] focus:outline-none p-1 mx-2"
    >
      <span v-html="icon" class="text-center"></span>
    </a>
  </div>
  <div v-else>
    <a
      :href="url"
      class="rounded-full bg-[#11113A] text-white text-lg flex items-center justify-center hover:bg-[#0f0f2a] focus:outline-none p-1 mx-2"
    >
      <span v-html="icon" class="text-center"></span>
    </a>
  </div>
</template>

<style>
  .icon {
    fill: white;
    transition: fill 0.3s ease;
  }

  .icon-container:hover .icon {
    fill: #808080;
  }
</style>