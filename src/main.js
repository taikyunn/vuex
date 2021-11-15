import Vue from 'vue'
import App from './App.vue'
// vuexを使用できるようにimport
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // vuexを宣言することで使用できるようになる
  store,
  router,
  render: h => h(App),
}).$mount('#app')
