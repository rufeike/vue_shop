import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式
import './assets/styles/global.css'

// 把axios组件挂载道全局中
import axios from 'axios'

// 设置默认根路径
axios.defaults.baseURL = 'http://192.168.50.13'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
