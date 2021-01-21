import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

// capitalize filter
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = (value.toString()).toLowerCase()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
