<template>
  <div class="color" :class="{ active: switcher }"></div>
</template>
<script>
export default {
  props: ['path'],
  computed: {
    switcher() {
      return this.$route.path === this.path;
    },
  },
};
</script>
<style>
.color {
  border-radius: 100%;
  width: 100px;
  height: 100px;
  opacity: 0.3;
  margin: 10px;
  transition: opacity 0.4s;
}
.active {
  opacity: 1;
}
</style>
