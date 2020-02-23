import Vue from 'vue'
import MintUI from 'mint-ui'
import router from './router';
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'

import App from './App.vue'

Vue.use(MintUI)
Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
