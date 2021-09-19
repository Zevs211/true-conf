import Vue from 'vue';
import App from './App.vue';
import router from './router'
import './sass/style.scss';

new Vue({
  router,
  el: '#app',
  render: (h) => h(App),
});
