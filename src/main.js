import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  Vant,
  render: h => h(App)
}).$mount('#app')

