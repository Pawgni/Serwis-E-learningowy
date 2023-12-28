import Vue from 'vue'
import App from './App.vue'
import './assets/styles/tailwind/tailwind-compiled.css';
import router from './router'


Vue.config.productionTip = false

Vue.component('board', require('./components/Board.vue').default);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
