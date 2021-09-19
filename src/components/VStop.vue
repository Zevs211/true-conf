<template>
  <div class="v-stop">{{ time }}</div>
</template>

<script>
export default {
  name: 'v-stop',
  props: ['time'],
  mounted() {
    setInterval(() => {
      this.time--;
    }, 1000);
  },
};
</script>

<style lang="scss">
.v-stop {
  width: 100px;
  height: 50px;
  background: #aacaf3;
  text-align: center;
  font-size: 40px;
  margin: 10px;
}
</style>