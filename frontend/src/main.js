import Vue from 'vue' // Vue
import App from './App.vue'
import './registerServiceWorker'
import router from './router' // Router
import store from './store' // Vuex

import axios from 'axios' // Axios
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://localhost:3000/api';

import vuetify from './plugins/vuetify' // Vuetify

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
