<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Circle Media',
    },
  },
};
</script>

<template>
  <h1>This is: {{ name }}!</h1>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>