import Vue from 'vue'
import App from './App.vue'
import router from './router'

// axios 
import axios from "axios";
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://liangwei.tech:3000"

// ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 创建全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path != '/login') {
    if (!localStorage.getItem('token')) {
      return router.push('/login')
    }
  }
  next()
})





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
