import Vue from 'vue'
import 'bootstrap-css-only'
import 'nprogress/nprogress.css';
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
