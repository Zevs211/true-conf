<template>
  <div>
    <div class="traffic-light">
      <v-color path="/red" class="red"></v-color>
      <v-color path="/yellow" class="yellow"></v-color>
      <v-color path="/green" class="green"></v-color>
    </div>
    <v-stop :time="timer"></v-stop>
  </div>
</template>


<script>
import VColor from '@/components/VColor.vue';
import VStop from '@/components/VStop.vue';

class State {
  constructor(path, dur, next) {
    this.path = path;
    this.dur = dur;
    this.next = next;
  }
}

export default {
  name: 'App',
  components: {
    VColor,
    VStop,
  },
  data() {
    return {
      timer: 0,
    };
  },
  methods: {
    trigger(state, callback) {
      callback(state);
      this.timer = state.dur;
      setTimeout(() => {
        this.trigger(state.next, callback);
      }, state.dur * 1000);
    },
  },
  mounted() {
    var red = new State('/red', 10);
    var yellowR = new State('/yellow', 3);
    var yellowG = new State('/yellow', 3);
    var green = new State('/green', 15);

    red.next = yellowR;
    yellowR.next = green;
    green.next = yellowG;
    yellowG.next = red;
    var beginState = red;
    if (this.$route.path === '/yellow') beginState = yellowR;
    else if (this.$route.path === '/green') beginState = green;

    this.trigger(beginState, (state) => {
      this.$router.push({ path: state.path, component: VColor });
    });
  },
};
</script>

<style lang="scss">
.red {
  background: red;
}
.yellow {
  background: yellow;
}

.green {
  background: green;
}
</style>